import { nanoid } from 'nanoid';
import { promisify } from 'util';
import { Client } from './client';
import { PeerConnection } from './peerConnection';
import { Queue } from './queue';
import { CreatePeerConnectionResponse } from './../proto/webrtc/CreatePeerConnectionResponse';
import { Callbacks } from './callbacks';
import { setup } from './shim_rtc_peer_connection';

export type PeerConnectionSdp = {
  peer_connection_id: string;
  sdp_type: string;
  sdp: string;
};

export class Session {
  public callbacks: Callbacks;
  public client: Client;
  private peerConnections: { [key: string]: PeerConnection } = {};
  private queues: Map<string, Queue> = new Map();

  constructor(
    public id: string,
    public name: string,
    private servers: string[],
  ) {
    this.callbacks = new Callbacks(this);
    this.client = new Client(this.servers);
  }

  /**
   * Create a new session
   * @param { name: string, servers: string[] } - name = the name of the session, servers = host + ip of gRPC servers
   * @returns {Promise<Session>}
   */
  static async create(options: {
    name: string;
    servers: string[];
  }): Promise<Session> {
    const sessionId = nanoid();
    const session = new Session(sessionId, options.name, options.servers);
    setup(session);

    for (const index in session.client.clients) {
      const client = session.client.clients[index];
      const createSession = promisify(client.createSession).bind(client);
      await createSession({ session_id: sessionId, ...options });
    }

    return session;
  }

  /**
   * Start a session/test
   * @returns {Promise<void>}
   */
  async start(): Promise<void> {
    for (const index in this.client.clients) {
      const client = this.client.clients[index];
      const startSession = promisify(client.startSession).bind(client);
      await startSession({ session_id: this.id });
    }
  }

  /**
   * Stop a session/test
   * @returns {Promise<void>}
   */
  async stop(): Promise<void> {
    for (const index in this.client.clients) {
      const client = this.client.clients[index];
      const stopSession = promisify(client.stopSession).bind(client);
      await stopSession({ session_id: this.id });
    }
  }

  /**
   * Gets the current stats for a session/test
   * @returns {Promise<void>}
   */
  async getStats(): Promise<void> {
    for (const index in this.client.clients) {
      const client = this.client.clients[index];
      const getStats = promisify(client.getStats).bind(client);
      return await getStats({ session_id: this.id });
    }
  }

  /**
   * Creates a peer connection
   * @returns {Promise<CreatePeerConnectionResponse>}
   */
  async createPeerConnection(options: {
    name: string;
  }): Promise<CreatePeerConnectionResponse> {
    const client = this.client.nextClient();
    const peerConnectionId = nanoid();
    this.peerConnections[peerConnectionId] = new PeerConnection(
      peerConnectionId,
      client,
    );
    const createPeerConnection = promisify(client.createPeerConnection).bind(
      client,
    );

    return await createPeerConnection({
      session_id: this.id,
      peer_connection_id: peerConnectionId,
      ...options,
    });
  }

  /**
   * Creates a SDP offer
   * @returns {Promise<PeerConnectionSdp>}
   */
  async createOffer(options: {
    peer_connection_id: string;
  }): Promise<PeerConnectionSdp> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const createOffer = promisify(client.createOffer).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      createOffer({ session_id: this.id, ...options }),
    );
  }

  /**
   * Creates a SDP answer
   * @returns {Promise<PeerConnectionSdp>}
   */
  async createAnswer(options: {
    peer_connection_id: string;
  }): Promise<PeerConnectionSdp> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const createAnswer = promisify(client.createAnswer).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      createAnswer({ session_id: this.id, ...options }),
    );
  }

  /**
   * The server requires upper case sdp types
   * @returns PeerConnectionSdp
   */
  normalizeSdp(sdp: PeerConnectionSdp): PeerConnectionSdp {
    return { ...sdp, sdp_type: sdp.sdp_type.toUpperCase() };
  }

  /**
   * Sets the local description
   * @returns {Promise<void>}
   */
  async setLocalDescription(options: PeerConnectionSdp): Promise<void> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const setLocalDescription = promisify(client.setLocalDescription).bind(
      client,
    );
    const sdp = this.normalizeSdp(options);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      setLocalDescription({ session_id: this.id, ...sdp }),
    );
  }

  /**
   * Sets the remote description
   * @returns {Promise<void>}
   */
  async setRemoteDescription(options: PeerConnectionSdp): Promise<void> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const setRemoteDescription = promisify(client.setRemoteDescription).bind(
      client,
    );
    const sdp = this.normalizeSdp(options);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      setRemoteDescription({ session_id: this.id, ...sdp }),
    );
  }

  /**
   * Adds a track
   * @returns {Promise<void>}
   */
  async addTrack(options: {
    peer_connection_id: string;
    track_id: string;
    track_label: string;
  }): Promise<void> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const addTrack = promisify(client.addTrack).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      addTrack({ session_id: this.id, ...options }),
    );
  }

  /**
   * Adds a Transceiver
   * @returns {Promise<void>}
   */
  async addTransceiver(options: {
    peer_connection_id: string;
    track_id: string;
    track_label: string;
  }): Promise<void> {
    const client = this.peerConnections[options.peer_connection_id].client;
    const addTransceiver = promisify(client.addTransceiver).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() =>
      addTransceiver({ session_id: this.id, ...options }),
    );
  }

  private get_queue(id: string) {
    if (!this.queues.has(id)) {
      this.queues.set(id, new Queue());
    }
    return this.queues.get(id);
  }
}
