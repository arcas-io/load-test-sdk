import { Session } from './../build/src/main.js';
import { provider, createTransport } from './../build/src/mediasoup.js';

const PEER_CONNECTIONS_PER_STEP = 500;
const PAUSE_BETWEEN_STEP_MS = 10000; // 2 minutes
const NUM_STEPS = 10;
const SOCKET_URI = process.env.SOCKET_URI || 'https://127.0.0.1:3000';
const PROTO_PATH = './../proto/webrtc.proto';

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// wait for the device to load
// hack for now, switch to events
const socketConnectCallback = async (device) => {
  for (let step = 0; step < NUM_STEPS; step++) {
    console.log(`starting step ${step}`);

    for (let i = 0; i < PEER_CONNECTIONS_PER_STEP; i++) {
      const peerConnectionName = `Peer Connection ${
        step * PEER_CONNECTIONS_PER_STEP + i + 1
      }`;
      console.log('start ', i);
      const { peer_connection_id } = await session.createPeerConnection({
        name: peerConnectionName,
      });

      console.log(`creating ${peerConnectionName}`);
      await createTransport(device, peer_connection_id);
      console.log('start end', i);
    }

    console.log(`\npausing ${PAUSE_BETWEEN_STEP_MS / 1000} seconds\n`);
    await timer(PAUSE_BETWEEN_STEP_MS);
  }

  await session.stop();
  console.log(`session stopped (${session.id}, ${session.name})`);
  process.exit();
};

let session = await Session.create({
  name: 'First Session',
  servers: ['[::]:50051'],
  protoPath: PROTO_PATH,
  logLevel: 'NONE',
  pollingStateS: 1,
});
console.log(`session created (${session.id}, ${session.name})`);

await session.start();
console.log(`session started (${session.id}, ${session.name})`);

// interact with a provider (e.g. mediasoup) for signaling
// invoke the callback (socketConnectCallback) when the device is loaded
await provider(SOCKET_URI, socketConnectCallback);
