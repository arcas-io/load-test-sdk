import { createSession } from './../build/src/main.js';

// Create a session with the load testing service
const session = createSession({ name: 'First Session' }).then((session) =>
  console.log('session created: ', session),
);
