import { promisify } from 'util';
import { client } from './client';

type CreateSessionOptions = {
  name: string;
};

type CreatePeerConnectionOptions = {
  name: string;
};

export class Session {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

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
   * @returns {Promise<void>}
   */
  async createPeerConnection(
    options: CreatePeerConnectionOptions,
  ): Promise<void> {
    const createPeerConnection = promisify(client.createPeerConnection).bind(
      client,
    );
    return await createPeerConnection({ session_id: this.id, ...options });
  }
}
