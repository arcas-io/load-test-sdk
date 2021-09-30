import { setup } from '../src/shim_rtc_peer_connection';
import { Device } from 'mediasoup-client';

const rtcPeerConnection = global.RTCPeerConnection;

const routerRtpCapabilities = {
  codecs: [
    {
      kind: 'video',
      mimeType: 'video/VP8',
      clockRate: 90000,
      rtcpFeedback: [],
      parameters: [],
      preferredPayloadType: 101,
    },
  ],
  headerExtensions: [
    {
      kind: 'video',
      uri: 'urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id',
      preferredId: 2,
      preferredEncrypt: false,
      direction: 'recvonly',
    },
  ],
};

describe('media soup works', () => {
  beforeEach(async () => {
    setup();
  });

  afterEach(async () => {
    global.RTCPeerConnection = rtcPeerConnection;
  });

  it('allows normal API to work', async () => {
    // assume mediasoup is running on the default port
    const device = new Device();
    await device.load({ routerRtpCapabilities } as any);
    console.log(device);
    // use the api without touching it's prototype
  });
});
