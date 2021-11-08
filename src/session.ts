import { promisify } from 'util';
import { client } from './client';
import { CreatePeerConnectionResponse } from './../proto/webrtc/CreatePeerConnectionResponse';
import { Callbacks } from './callbacks';
import { setup } from './shim_rtc_peer_connection';

export type PeerConnectionSdp = {
  peer_connection_id: string;
  sdp_type: string;
  sdp: string;
};

export interface DeferredPromise<ValueType> {
  /**
  The deferred promise.
  */
  promise: Promise<ValueType>;

  /**
  Resolves the promise with a value or the result of another promise.
  @param value - The value to resolve the promise with.
  */
  resolve(value?: ValueType | PromiseLike<ValueType>): void;

  /**
  Reject the promise with a provided reason or error.
  @param reason - The reason or error to reject the promise with.
  */
  reject(reason?: unknown): void;
}

function defer<T>(): DeferredPromise<T> {
  const deferred = {} as any;

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
}

/**
 * Many peer connection api methods must be qeueud such that they do not arrive
 * at the server out of order.
 */
class Queue {
  queue: Array<[() => Promise<any>, DeferredPromise<any>]> = [];
  running = false;

  public queue_call<T>(fn: () => Promise<T>): Promise<T> {
    const later = defer<T>();
    this.queue.push([fn, later]);
    this.run();

    return later.promise;
  }

  private run() {
    if (this.running) {
      return
    }
    this.running = true;
    const item = this.queue.shift();
    if (!item) {
      this.running = false;
      return;
    }

    const [fn, later] = item;
    fn().then(value => {
      later.resolve(value);
      this.running = false;
      this.run();
    }).catch(err => {
      later.reject(err);
      this.running = false;
      this.run();
    });
  }
}

export class Session {
  public callbacks: Callbacks;
  private queues: Map<string, Queue> = new Map();

  private get_queue(id: string) {
    if (!this.queues.has(id)) {
      this.queues.set(id, new Queue());
    }
    return this.queues.get(id);
  }

  constructor(public id: string, public name: string) {
    this.callbacks = new Callbacks(this);
  }

  /**
   * Create a new session
   * @param {CreateSessionOptions} options - The { name } of the session (mostly for debugging).
   * @returns {Promise<Session>}
   */
  static async create(options: { name: string }): Promise<Session> {
    const createSession = promisify(client.createSession).bind(client);
    const response = await createSession(options);
    const session = new Session(response.session_id, options.name);
    setup(session);

    return session;
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
    return this.get_queue(options.peer_connection_id).queue_call(() => createOffer({ session_id: this.id, ...options }));
  }

  /**
   * Creates a SDP answer
   * @returns {Promise<PeerConnectionSdp>}
   */
  async createAnswer(options: {
    peer_connection_id: string;
  }): Promise<PeerConnectionSdp> {
    const createAnswer = promisify(client.createAnswer).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() => createAnswer({ session_id: this.id, ...options }));
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
    const setLocalDescription = promisify(client.setLocalDescription).bind(
      client,
    );
    const sdp = this.normalizeSdp(options);
    return this.get_queue(options.peer_connection_id).queue_call(() => setLocalDescription({ session_id: this.id, ...sdp }));
  }

  /**
   * Sets the remote description
   * @returns {Promise<void>}
   */
  async setRemoteDescription(options: PeerConnectionSdp): Promise<void> {
    const setRemoteDescription = promisify(client.setRemoteDescription).bind(
      client,
    );
    const sdp = this.normalizeSdp(options);
    return this.get_queue(options.peer_connection_id).queue_call(() => setRemoteDescription({ session_id: this.id, ...sdp }));
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
    return this.get_queue(options.peer_connection_id).queue_call(() => addTrack({ session_id: this.id, ...options }));
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
    const addTransceiver = promisify(client.addTransceiver).bind(client);
    return this.get_queue(options.peer_connection_id).queue_call(() => addTransceiver({ session_id: this.id, ...options }));
  }
}
