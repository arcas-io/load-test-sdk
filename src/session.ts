import { promisify } from 'util';
import { client } from './client';
import { CreatePeerConnectionResponse } from './../proto/webrtc/CreatePeerConnectionResponse';

export type PeerConnectionSdp = {
  peer_connection_id: string;
  sdp_type: string;
  sdp: string;
};

export class Session {
  constructor(public id: string, public name: string) {}

  /**
   * Create a new session
   * @param {CreateSessionOptions} options - The { name } of the session (mostly for debugging).
   * @returns {Promise<Session>}
   */
  static async create(options: { name: string }): Promise<Session> {
    const createSession = promisify(client.createSession).bind(client);
    const response = await createSession(options);
    return new Session(response.session_id, options.name);
  }

  /**
   * Start a session/test
   * @returns {Promise<void>}
   */
  async start(): Promise<void> {
    const startSession = promisify(client.startSession).bind(client);
    return await startSession({ session_id: this.id });
  }

  /**
   * Stop a session/test
   * @returns {Promise<void>}
   */
  async stop(): Promise<void> {
    const stopSession = promisify(client.stopSession).bind(client);
    return await stopSession({ session_id: this.id });
  }

  /**
   * Gets the current stats for a session/test
   * @returns {Promise<void>}
   */
  async getStats(): Promise<void> {
    const getStats = promisify(client.getStats).bind(client);
    return await getStats({ session_id: this.id });
  }

  /**
   * Creates a peer connection
   * @returns {Promise<CreatePeerConnectionResponse>}
   */
  async createPeerConnection(options: {
    name: string;
  }): Promise<CreatePeerConnectionResponse> {
    const createPeerConnection = promisify(client.createPeerConnection).bind(
      client,
    );
    return await createPeerConnection({ session_id: this.id, ...options });
  }

  /**
   * Creates a SDP offer
   * @returns {Promise<PeerConnectionSdp>}
   */
  async createOffer(options: {
    peer_connection_id: string;
  }): Promise<PeerConnectionSdp> {
    const createOffer = promisify(client.createOffer).bind(client);
    return await createOffer({ session_id: this.id, ...options });
  }

  /**
   * Creates a SDP answer
   * @returns {Promise<PeerConnectionSdp>}
   */
  async createAnswer(options: {
    peer_connection_id: string;
  }): Promise<PeerConnectionSdp> {
    const createAnswer = promisify(client.createAnswer).bind(client);
    return await createAnswer({ session_id: this.id, ...options });
  }

  /**
   * Sets the local description
   * @returns {Promise<void>}
   */
  async setLocalDescription(options: PeerConnectionSdp): Promise<void> {
    const setLocalDescription = promisify(client.setLocalDescription).bind(
      client,
    );
    return await setLocalDescription({ session_id: this.id, ...options });
  }

  /**
   * Sets the remote description
   * @returns {Promise<void>}
   */
  async setRemoteDescription(options: PeerConnectionSdp): Promise<void> {
    const setRemoteDescription = promisify(client.setRemoteDescription).bind(
      client,
    );
    return await setRemoteDescription({ session_id: this.id, ...options });
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
    const addTrack = promisify(client.addTrack).bind(client);
    return await addTrack({ session_id: this.id, ...options });
  }

  /**
   * Adds a Transceiver
   * @returns {Promise<void>}
   */
  async addTransceiver(options: { peer_connection_id: string }): Promise<void> {
    const addTransceiver = promisify(client.addTransceiver).bind(client);
    return await addTransceiver({ session_id: this.id, ...options });
  }
}
