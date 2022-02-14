import { Session } from './../build/src/main.js';
import { provider, createTransport } from './../build/src/mediasoup.js';
import { Scheduler } from './../build/src/scheduler.js'

const TEST_TIME_MS = 5000000;
const STATS_INCREMENTS_MS = 5000;
const SOCKET_URI = 'https://127.0.0.1:3000';
const SERVERS = ['[::1]:50051'];
const PROTO_PATH = './../../../rust/server/proto/webrtc.proto';

// scheduler test
try {
  const SCHEDULER_PROTO_PATH = './../../../rust/scheduler/proto/scheduler.proto'
  const scheduler = new Scheduler('[::1]:50051', SCHEDULER_PROTO_PATH);
  const endpoints = await scheduler.schedule({
    company_id: "test",
    session_id: "test",
    user_id: "test",
    providers: [{
      provider: 'gcp',
      regions: [
        {
          region: "test",
          num_servers: 5,
        }
      ]
    }]
  });
  console.log(endpoints);
} catch (e) {}


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
  protoPath: PROTO_PATH,
  logLevel: 'NONE',
  pollingStateS: 0,
});
console.log(`session created (${session.id}, ${session.name})`);

await session.start();
console.log(`session started (${session.id}, ${session.name})`);

// interact with a provider (e.g. mediasoup) for signaling
await provider(SOCKET_URI, socketConnectCallback);
