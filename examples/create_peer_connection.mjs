import { Session } from './../build/src/main.js';

const TOTAL_PEER_CONNECTIONS = 18;
let TEST_COUNTER = 0;
const STATS_INCREMENTS_MS = 500;

let session = await Session.create({ name: 'First Session' });
console.log('session created: ', session);

await session.start();
console.log('session started: ', session);

const interval = setInterval(async () => {
  TEST_COUNTER += 1;

  const peerConnectionName = 'Peer Connection ' + TEST_COUNTER;
  await session.createPeerConnection({ name: peerConnectionName });
  console.log('new peer connection: ', peerConnectionName);

  if (TEST_COUNTER >= TOTAL_PEER_CONNECTIONS) {
    clearInterval(interval);
    // await session.stop();
    // console.log('session stopped: ', session);
  }
}, STATS_INCREMENTS_MS);
