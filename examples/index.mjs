import { Session } from './../build/src/main.js';

const TEST_TIME_MS = 5000;
let TEST_COUNTER_MS = 0;
const STATS_INCREMENTS_MS = 1000;

let session = await Session.create({ name: 'First Session' });
console.log('session created: ', session);

await session.start();
console.log('session started: ', session);

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

// import {
//   createSession,
//   startSession,
//   stopSession,
// } from './../build/src/main.js';

// let session = await createSession({ name: 'First Session' });
// console.log('session created: ', session);

// await startSession(session);
// console.log('session started: ', session);

// await stopSession(session);
// console.log('session stopped: ', session);
