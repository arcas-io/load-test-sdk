import { JSDOM } from 'jsdom';

// ensure JSDOM is loaded before loading GT code
global.window = new JSDOM(`...`).window;

const { loadTest } = await import('./load-test.mjs');

// sensible defaults, override with env vars
const config = {
  num_connections: process.env.num_connections || 20,
  soak_time_ms: process.env.soak_time_ms || 60000,
  stats_increments_s: process.env.stats_increments_s || 2,
  failure_pct: process.env.failure_pct || 100,
  failure_persistence_s: process.env.failure_persistence_s || 2,
  log_level: process.env.log_level || 'WARN', // NONE, INFO, WARN, ERROR, VERBOSE
  socket_uri: process.env.socket_uri || 'https://127.0.0.1:3000',
  servers: process.env.servers || ['[::]:50051'],
  path_to_build: process.env.path_to_build || './../../../build/',
  path_to_proto: process.env.path_to_proto || './proto/webrtc.proto',
};

await loadTest(config);
