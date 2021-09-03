import {
  createSession,
  startSession,
  stopSession,
  Session,
} from '../src/session';

const SESSION_NAME = 'From Node SDK';

async function newSession(): Promise<Session> {
  return await createSession({ name: SESSION_NAME });
}

describe('createSession function', () => {
  it('creates a new session', async () => {
    const session = await newSession();
    expect(session.id).toHaveLength(21);
    expect(session.name).toBe(SESSION_NAME);
  });
});

describe('startSession function', () => {
  it('starts a session', async () => {
    const session = await newSession();
    await expect(startSession(session)).resolves.not.toThrow();
  });
});

describe('stopSession function', () => {
  it('stops a session', async () => {
    const session = await newSession();
    await expect(stopSession(session)).resolves.not.toThrow();
  });
});
