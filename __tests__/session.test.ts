import { Session } from '../src/session';

const SESSION_NAME = 'From Node SDK';

async function newSession(): Promise<Session> {
  return await Session.create({ name: SESSION_NAME });
}

describe('Session.create function', () => {
  it('creates a new session', async () => {
    const session = await newSession();
    expect(session.id).toHaveLength(21);
    expect(session.name).toBe(SESSION_NAME);
  });
});

describe('Session.start function', () => {
  it('starts a session', async () => {
    const session = await newSession();
    await expect(session.start()).resolves.not.toThrow();
  });
});

describe('Session.stop function', () => {
  it('stops a session', async () => {
    const session = await newSession();
    await session.start();
    await expect(session.stop()).resolves.not.toThrow();
  });
});

describe('Session.getStats function', () => {
  it('stops a session', async () => {
    const session = await newSession();
    await session.start();
    await expect(session.getStats()).resolves.not.toThrow();
  });
});
