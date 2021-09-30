import { Session } from './../build/src/main.js';
import { setup } from './../build/src/shim_rtc_peer_connection.js';
import { provider } from './../build/src/mediasoup.js';

const TEST_TIME_MS = 5000;
let TEST_COUNTER_MS = 0;
const STATS_INCREMENTS_MS = 1000;
const SOCKET_URI = 'https://127.0.0.1:3000';

// register a callback to be invoked when setting the remote description
const setRemoteDescription = (sdp) => console.log(sdp);

// pull in mocked DOM WebRTC calls
setup(setRemoteDescription);

// interact with a provider (e.g. mediasoup)
provider(SOCKET_URI);

let session = await Session.create({ name: 'First Session' });
console.log('session created: ', session);

await session.start();
console.log('session started: ', session);

const peerConnectionName = 'First Peer Connection';
await session.createPeerConnection({ name: peerConnectionName });
console.log('new peer connection: ', peerConnectionName);

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
