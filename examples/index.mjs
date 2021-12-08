import { Session } from './../build/src/main.js';
import { provider, createTransport } from './../build/src/mediasoup.js';

const TEST_TIME_MS = 5000000;
const STATS_INCREMENTS_MS = 5000;
const SOCKET_URI = 'https://127.0.0.1:3000';
const SERVERS = ['[::]:50051'];

let TEST_COUNTER_MS = 0;

// wait for the device to load
// hack for now, switch to events
const socketConnectCallback = async (device) => {
  for (let i = 0; i < 30; i++) {
    const peerConnectionName = `Peer Connection ${i + 1}`;
    console.log('new peer connection: ', peerConnectionName);
    await createTransport(device);
  }

  const interval = setInterval(async () => {
    TEST_COUNTER_MS += STATS_INCREMENTS_MS;

    if (TEST_COUNTER_MS >= TEST_TIME_MS) {
      clearInterval(interval);
      await session.stop();
      console.log(`session stopped (${session.id}, ${session.name})`);
      process.exit();
    }
  }, STATS_INCREMENTS_MS);
};

const session = await Session.create({
  name: 'First Session',
  servers: SERVERS,
});
console.log(`session created (${session.id}, ${session.name})`);

await session.start();
console.log(`session started (${session.id}, ${session.name})`);

// interact with a provider (e.g. mediasoup) for signaling
await provider(SOCKET_URI, socketConnectCallback);
