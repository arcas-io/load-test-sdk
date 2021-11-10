import { Session } from '../src/session';
import { answer } from '../fixtures/sdp';

const SESSION_NAME = 'From Node SDK';
const PEER_CONNECTION_NAME = 'PC from Node SDK';
const SERVERS = ['[::]:50051', '[::]:50051', '[::]:50051'];

async function newSession(): Promise<Session> {
  return await Session.create({ name: SESSION_NAME, servers: SERVERS });
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

describe('Session.createPeerConnection function', () => {
  it('creates a peer connection', async () => {
    const session = await newSession();
    await session.start();
    await expect(
      session.createPeerConnection({ name: PEER_CONNECTION_NAME }),
    ).resolves.not.toThrow();
  });
});

describe('Session.createOffer function', () => {
  it('creates an offer', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const options = { peer_connection_id };
    const offer = await session.createOffer(options);

    // make sure the session id and peer connection ids match up
    expect(offer).toMatchObject({ session_id: session.id, peer_connection_id });

    // ensure that offer isn't blank
    expect(offer.sdp).toContain('v=0');
  });
});

describe('Session.createAnswer function', () => {
  it('creates an answer', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });

    const options = {
      peer_connection_id,
      sdp_type: 'answer',
      sdp: answer,
    };

    // setting the remote description first is required for creating an answer
    await session.setRemoteDescription(options);
    const answerSdp = await session.createAnswer({ peer_connection_id });

    // make sure the session id and peer connection ids match up
    expect(answerSdp).toMatchObject({
      session_id: session.id,
      peer_connection_id,
    });

    // ensure that answer isn't blank
    expect(answerSdp.sdp).toContain('v=0');
  });
});

describe('Session.setLocalDescription function', () => {
  it('sets the local description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const offer = await session.createOffer({ peer_connection_id });

    await expect(session.setLocalDescription(offer)).resolves.not.toThrow();
  });
});

describe('Session.setRemoteDescription function', () => {
  it('sets the remote description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const options = {
      peer_connection_id,
      sdp_type: 'answer',
      sdp: answer,
    };

    await expect(session.setRemoteDescription(options)).resolves.not.toThrow();
  });

  describe('Session.addTrack function', () => {
    it('adds a track', async () => {
      const session = await newSession();
      await session.start();
      const { peer_connection_id }: any = await session.createPeerConnection({
        name: PEER_CONNECTION_NAME,
      });
      await expect(
        session.addTrack({
          peer_connection_id,
          track_id: '1',
          track_label: 'FirstLabel',
        }),
      ).resolves.not.toThrow();
    });
  });

  describe('Session.addTransceiver function', () => {
    it('adds a track', async () => {
      const session = await newSession();
      await session.start();
      const { peer_connection_id }: any = await session.createPeerConnection({
        name: PEER_CONNECTION_NAME,
      });
      await expect(
        session.addTransceiver({
          peer_connection_id,
          track_id: '1',
          track_label: 'FirstLabel',
        }),
      ).resolves.not.toThrow();
    });
  });
});
