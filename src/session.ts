import { promisify } from 'util';
import { client } from './client';
import { CreatePeerConnectionResponse } from './../proto/webrtc/CreatePeerConnectionResponse';

type CreateSessionOptions = {
  name: string;
};

export type CreatePeerConnectionOptions = {
  name: string;
};

export type OfferAnswerOptions = {
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
  static async create(options: CreateSessionOptions): Promise<Session> {
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
   * Gets the current stats for a session/test
   * @returns {Promise<CreatePeerConnectionResponse>}
   */
  async createPeerConnection(
    options: CreatePeerConnectionOptions,
  ): Promise<CreatePeerConnectionResponse> {
    const createPeerConnection = promisify(client.createPeerConnection).bind(
      client,
    );
    return await createPeerConnection({ session_id: this.id, ...options });
  }

  /**
   * Gets the current stats for a session/test
   * @returns {Promise<void>}
   */
  async setLocalDescription(options: OfferAnswerOptions): Promise<void> {
    const setLocalDescription = promisify(client.setLocalDescription).bind(
      client,
    );
    return await setLocalDescription({ session_id: this.id, ...options });
  }

  /**
   * Gets the current stats for a session/test
   * @returns {Promise<void>}
   */
  async setRemoteDescription(options: OfferAnswerOptions): Promise<void> {
    const setRemoteDescription = promisify(client.setRemoteDescription).bind(
      client,
    );
    return await setRemoteDescription({ session_id: this.id, ...options });
  }
}
