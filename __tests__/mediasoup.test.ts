import { setup } from '../src/shim_rtc_peer_connection';
import { provider } from './../build/src/mediasoup.js';
import { Device } from 'mediasoup-client';

// TODO: mock mediasoup server

const SOCKET_URI = 'https://127.0.0.1:3000';
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

const setLocalDescription = (sdp) => console.log(sdp);
const setRemoteDescription = (sdp) => console.log(sdp);
let initialGlobal: any = global;

describe.skip('media soup works', () => {
  beforeEach(async () => {
    initialGlobal = global;
    setup(setLocalDescription, setRemoteDescription);
    await provider(SOCKET_URI);
  });

  afterEach(async () => {
    global = initialGlobal;
  });

  it('allows normal API to work', async () => {
    // assume mediasoup is running on the default port
    const device = new Device();
    await device.load({ routerRtpCapabilities } as any);
    console.log(device);
    // use the api without touching it's prototype
  });
});
