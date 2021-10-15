import { Session } from './../build/src/main.js';
import { setup } from './../build/src/shim_rtc_peer_connection.js';
import { provider } from './../build/src/mediasoup.js';

const TEST_TIME_MS = 50000;
let TEST_COUNTER_MS = 0;
const STATS_INCREMENTS_MS = 1000;
const SOCKET_URI = 'https://127.0.0.1:3000';

let session = await Session.create({ name: 'First Session' });
console.log('session created: ', session);

await session.start();
console.log('session started: ', session);

setTimeout(function () {}, 5000);

const peerConnectionName = 'First Peer Connection';
const { peer_connection_id } = await session.createPeerConnection({
  name: peerConnectionName,
});
console.log('new peer connection: ', peerConnectionName);

// register callbacks to be invoked when setting the local and remote descriptions
// TODO: move this into the SDK
const cbCreateOffer = async (options) => {
  try {
    return await session.createOffer({ peer_connection_id });
  } catch (e) {
    console.error('cbCreateOffer error: ', e.details);
  }
};

const cbCreateAnswer = async (options) => {
  try {
    return await session.createAnswer({ peer_connection_id });
  } catch (e) {
    console.error('cbCreateAnswer error: ', e.details);
  }
};

const cbSetLocalDescription = async (sdp) => {
  try {
    const options = {
      peer_connection_id,
      ...sdp,
    };
    await session.setLocalDescription(options);
  } catch (e) {
    console.error('cbSetLocalDescription error: ', e.details);
  }
};

const cbSetRemoteDescription = async (sdp) => {
  try {
    const options = {
      peer_connection_id,
      sdp: sdp.sdp,
      sdp_type: sdp.type,
    };
    await session.setRemoteDescription(options);

    // TODO: respond with this answer to the SFU?
    // const answer = await session.createAnswer({ peer_connection_id });
    // return answer;
  } catch (e) {
    console.error('cbSetRemoteDescription error: ', e.details);
  }
};

const cbAddTrack = async (options) => {
  try {
    return await session.addTrack({ peer_connection_id, ...options });
  } catch (e) {
    console.error('cbAddTrack error: ', e.details);
  }
};

const cbAddTransceiver = async (options) => {
  try {
    return await session.addTransceiver({ peer_connection_id, ...options });
  } catch (e) {
    console.error('cbAddTransceiver error: ', e.details);
  }
};

// pull in mocked DOM WebRTC calls
// TODO: move this into the SDK
setup(
  cbCreateOffer,
  cbCreateAnswer,
  cbSetLocalDescription,
  cbSetRemoteDescription,
  cbAddTrack,
  cbAddTransceiver,
);

// interact with a provider (e.g. mediasoup) for signaling
await provider(SOCKET_URI);

const interval = setInterval(async () => {
  TEST_COUNTER_MS += STATS_INCREMENTS_MS;

  if (TEST_COUNTER_MS >= TEST_TIME_MS) {
    clearInterval(interval);
    await session.stop();
    console.log('session stopped: ', session);
  }

  const stats = await session.getStats();
  console.log('stats: ', stats);
}, STATS_INCREMENTS_MS);
