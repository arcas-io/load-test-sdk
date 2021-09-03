import { promisify } from 'util';
import { client } from './client';

export class Session {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

type CreateSessionOptions = {
  name: string;
};

/**
 * Returns the newly created session
 * @param {CreateSessionOptions} options - The name of the session (mostly for debugging).
 * @returns {Promise<string>}
 */
export async function createSession(
  options: CreateSessionOptions,
): Promise<Session> {
  const createSession = promisify(client.createSession).bind(client);
  const response = await createSession(options);
  const session = new Session(response.session_id, options.name);

  return session;
}

/**
 * Start a session/test
 * @param {Session} session
 * @returns {Promise<string>}
 */
export async function startSession(session: Session): Promise<void> {
  const startSession = promisify(client.startSession).bind(client);
  return await startSession({ session_id: session.id });
}

/**
 * Stop a session/test
 * @param {Session} session
 * @returns {Promise<string>}
 */
export async function stopSession(session: Session): Promise<void> {
  const stopSession = promisify(client.stopSession).bind(client);
  return await stopSession({ session_id: session.id });
}
