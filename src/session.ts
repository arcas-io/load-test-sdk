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

type SessionOptions = {
  name: string;
};

/**
 * Returns the newly created session
 * @param {string} name - The name of the session (mostly for debugging).
 * @returns {Promise<string>}
 */
export async function createSession(options: SessionOptions): Promise<Session> {
  const createSession = promisify(client.createSession).bind(client);
  const response = await createSession(options);
  const session = new Session(response.session_id, options.name);

  return session;
}
