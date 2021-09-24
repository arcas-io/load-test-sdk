import { setup } from '../src/rtc_peer_connection';
import { Device } from 'mediasoup-client';

const rtcPeerConnection = global.RTCPeerConnection;

describe('media soup works', () => {
  beforeEach(async () => {
    setup();
  });

  afterEach(async () => {
    global.RTCPeerConnection = rtcPeerConnection;
  });

  it('allows normal API to work', () => {
    // assume mediasoup is running on the default port
    const device = new Device();
    // use the api without touching it's prototype
  });
});
