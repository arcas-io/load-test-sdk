import { nanoid } from 'nanoid';
import clui from 'clui';
import cli_color from 'cli-color';
import { Session, getUserMedia } from '@arcas/sdk';
import { provider, createTransport } from './../../../build/src/mediasoup.js';

export async function loadTest(config) {
  console.log(config);

  const failure_num = config.num_connections * config.failure_pct;
  const stats_increments_ms = config.stats_increments_s * 1000;
  let test_counter_ms = 0;
  let failure_count = 0;

  const newSpinner = () =>
    new clui.Spinner('', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
  const spinnerLoad = newSpinner();
  const spinnerSoak = newSpinner();
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const session = await Session.create({
    name: 'First Session',
    pollingStateS: config.stats_increments_s,
    logLevel: config.log_level,
    servers: config.servers,
    protoPath: '/proto/webrtc.proto',
  });

  console.clear();
  console.log(`Arcas load test`);
  console.log(`\nPeer Group: 1 producer, 1 consumer`);
  console.log(
    `Stale: When a peer connection (producer or consumer) doesn't send or receive bytes within 1 second`,
  );
  console.log(
    `Failure Criteria: ${parseInt(
      config.failure_pct * 100,
    )}% of peer connections stale for ${
      config.failure_persistence_s
    } second(s)`,
  );

  spinnerLoad.start();
  spinnerLoad.message(`Session created`);

  await session.start();
  spinnerLoad.message(`Session started`);

  console.log(`\n\nCreating ${config.num_connections} peer groups`);

  for (let i = 0; i < config.num_connections; i++) {
    await provider(config.socket_uri, createTransport);

    spinnerLoad.message(
      clui.Gauge(
        i + 1,
        config.num_connections,
        100,
        config.num_connections + 1,
        `${i + 1} peer groups `,
      ),
    );
  }

  // let the spinner/gauge catch up
  await timer(100);

  spinnerLoad.message(
    clui.Gauge(
      config.num_connections,
      config.num_connections,
      100,
      config.num_connections,
      `${config.num_connections} peer groups `,
    ),
  );

  console.log(
    `\n\nHolding ${config.num_connections} peer groups for ${
      config.soak_time_ms / 1000
    } seconds`,
  );

  spinnerLoad.stop();

  // begin soak
  spinnerSoak.start();
  spinnerSoak.message(
    clui.Gauge(
      0,
      config.soak_time_ms,
      100,
      config.soak_time_ms,
      `${test_counter_ms / 1000} seconds `,
    ),
  );

  const interval = setInterval(async () => {
    test_counter_ms += stats_increments_ms;

    let stats = await session.getStats();
    let elapsed = Math.min(test_counter_ms, config.soak_time_ms);
    let num_sending = stats.session.peer_connection_state.num_sending;
    let num_stale = config.num_connections - num_sending;

    // determine if the test is failing
    // TODO: place in the SDK
    if (num_stale >= failure_num) {
      failure_count += 1;
      if (failure_count >= config.failure_persistence_s) {
        const error_message = `\n\nTest failed because ${failure_num} peer groups were stale for ${config.failure_persistence_s} second(s)\n`;
        console.log(cli_color.red(error_message));
        process.exit(1);
      }
    }

    spinnerSoak.message(
      clui.Gauge(
        elapsed,
        config.soak_time_ms,
        100,
        config.soak_time_ms + 1,
        `${
          elapsed / 1000
        } seconds, num_sending: ${num_sending}, num_stale: ${num_stale}  `,
      ),
    );

    // test is over
    if (test_counter_ms > config.soak_time_ms) {
      clearInterval(interval);
      await session.stop();
      console.log(`\n\nSession stopped\n\n`);
      process.exit();
    }
  }, stats_increments_ms);
}
