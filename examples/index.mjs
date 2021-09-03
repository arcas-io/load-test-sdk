import {
  createSession,
  startSession,
  stopSession,
} from './../build/src/main.js';

let session = await createSession({ name: 'First Session' });
console.log('session created: ', session);

await startSession(session);
console.log('session started: ', session);

await stopSession(session);
console.log('session stopped: ', session);
