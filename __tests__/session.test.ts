import { Session } from '../src/session';

const SESSION_NAME = 'From Node SDK';
const PEER_CONNECTION_NAME = 'PC from Node SDK';
const PROTO_PATH = '/proto/webrtc.proto';
const SERVERS = ['[::]:50051'];

async function newSession(): Promise<Session> {
  return await Session.create({
    name: SESSION_NAME,
    pollingStateS: 1,
    logLevel: 'None',
    servers: SERVERS,
    protoPath: PROTO_PATH,
  });
}

describe('Session', () => {
  it('creates a new session', async () => {
    const session = await newSession();
    expect(session.id).toHaveLength(21);
    expect(session.name).toBe(SESSION_NAME);
  });

  it('starts a session', async () => {
    const session = await newSession();
    await expect(session.start()).resolves.not.toThrow();
  });

  it('stops a session', async () => {
    const session = await newSession();
    await session.start();
    await expect(session.stop()).resolves.not.toThrow();
  });

  it('creates a peer connection', async () => {
    const session = await newSession();
    await session.start();
    await expect(
      session.createPeerConnection({
        name: PEER_CONNECTION_NAME,
      }),
    ).resolves.not.toThrow();
  });

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

  it('creates an answer', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const offer = await session.createOffer({ peer_connection_id });
    const options = {
      peer_connection_id,
      sdp_type: offer.sdp_type,
      sdp: offer.sdp,
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

  it('sets the local description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const offer = await session.createOffer({ peer_connection_id });

    await expect(session.setLocalDescription(offer)).resolves.not.toThrow();
  });

  it('sets the remote description', async () => {
    const session = await newSession();
    await session.start();
    const { peer_connection_id }: any = await session.createPeerConnection({
      name: PEER_CONNECTION_NAME,
    });
    const offer = await session.createOffer({ peer_connection_id });
    const options = {
      peer_connection_id,
      sdp_type: offer.sdp_type,
      sdp: offer.sdp,
    };

    await expect(session.setRemoteDescription(options)).resolves.not.toThrow();
  });

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

  it('adds a transceiver', async () => {
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
