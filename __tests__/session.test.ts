import { Session } from '../src/session';
import { answer, offer } from './fixtures/sdp';

const SESSION_NAME = 'From Node SDK';
const PEER_CONNECTION_NAME = 'PC from Node SDK';

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

describe('Session.createPeerConnection function', () => {
  it('stops a session', async () => {
    const session = await newSession();
    await session.start();
    await expect(
      session.createPeerConnection({ name: PEER_CONNECTION_NAME }),
    ).resolves.not.toThrow();
  });
});

describe('Session.setLocalDescription function', () => {
  it('sets the local description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    let options = {
      peer_connection_id,
      sdp_type: 'offer',
      sdp: offer,
    };

    await expect(session.setLocalDescription(options)).resolves.not.toThrow();
  });
});

describe('Session.setRemoteDescription function', () => {
  it('sets the remote description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    let options = {
      peer_connection_id,
      sdp_type: 'answer',
      sdp: answer,
    };

    await expect(session.setRemoteDescription(options)).resolves.not.toThrow();
  });
});
