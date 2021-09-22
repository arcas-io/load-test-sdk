import { Session } from './../build/src/main.js';

const TEST_TIME_MS = 5000;
let TEST_COUNTER_MS = 0;
const STATS_INCREMENTS_MS = 1000;

let session = await Session.create({ name: 'First Session' });
console.log('session created: ', session);

await session.start();
console.log('session started: ', session);

await newPeerConnection(session, 'First Peer Connection');
await newPeerConnection(session, 'Second Peer Connection');

const interval = setInterval(async () => {
  TEST_COUNTER_MS += STATS_INCREMENTS_MS;

  if (TEST_COUNTER_MS >= TEST_TIME_MS) {
    clearInterval(interval);
    await session.stop();
    console.log('session stopped: ', session);
  }

  const stats = await session.getStats();
  console.log('stats: ', JSON.stringify(stats, null, 4));
}, STATS_INCREMENTS_MS);

async function newPeerConnection(session, name) {
  await session.createPeerConnection({ name });
  console.log('new peer connection: ', name);
}
