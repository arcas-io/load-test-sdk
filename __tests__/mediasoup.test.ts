import { Session } from '../src/session';
import { provider } from './../build/src/mediasoup.js';
import { Device } from 'mediasoup-client';

// TODO: mock mediasoup server

const SOCKET_URI = 'https://127.0.0.1:3000';
const PROTO_PATH = '/proto/webrtc.proto';
const SERVERS = ['[::]:50051', '[::]:50052'];
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

// const creatOffer = (options) => console.log(options);
// const createAnswer = (options) => console.log(options);
// const setLocalDescription = (sdp) => console.log(sdp);
// const setRemoteDescription = (sdp) => console.log(sdp);
// const addTrack = (sdp) => console.log(sdp);
// const addTransceiver = (sdp) => console.log(sdp);
let initialGlobal: any = global;

describe.skip('media soup works', () => {
  beforeEach(async () => {
    initialGlobal = global;
    const session = await Session.create({
      name: 'mediasoup test',
      pollingStateS: 1,
      logLevel: 'None',
      servers: SERVERS,
      protoPath: PROTO_PATH,
    });
    await session.start();
    const callback = (_device: any) => console.log('device ready');
    await provider(SOCKET_URI, callback);
  });

  afterEach(async () => {
    // eslint-disable-next-line no-global-assign
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
