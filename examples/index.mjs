import { Session } from './../build/src/main.js';
import { provider, createTransport } from './../build/src/mediasoup.js';

const TEST_TIME_MS = 50000;
let TEST_COUNTER_MS = 0;
const STATS_INCREMENTS_MS = 1000;
const SOCKET_URI = 'https://127.0.0.1:3000';

// wait for the device to load
// hack for now, switch to events
const socketConnectCallback = async (device) => {
  for (let i = 0; i <= 3; i++) {
    const peerConnectionName = `Peer Connection ${i + 1}`;
    const { peer_connection_id } = await session.createPeerConnection({
      name: peerConnectionName,
    });
    console.log('new peer connection: ', peerConnectionName);

    await createTransport(device, peer_connection_id);
  }

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
};

let session = await Session.create({ name: 'First Session' });
console.log(`session created: ${session.id}, ${session.name}`);

await session.start();
console.log(`session started: ${session.id}, ${session.name}`);

// interact with a provider (e.g. mediasoup) for signaling
await provider(SOCKET_URI, socketConnectCallback);
