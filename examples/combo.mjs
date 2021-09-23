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
  }

  console.clear();
  const stats = await session.getStats();
  console.log('\n\nSESSION STATS');
  console.table([stats.session]);

  console.log('\nPEER CONNECTION STATS');
  let tables = [];
  stats.peer_connections.forEach((peer_connection) => {
    console.log(peer_connection.name);
    console.table(peer_connection.video_sender[0]);
  });
}, STATS_INCREMENTS_MS);

async function newPeerConnection(session, name) {
  await session.createPeerConnection({ name });
  console.log('new peer connection: ', name);
}
