/* eslint-disable */
/* tslint-disable */

import { Device } from 'mediasoup-client';
import { io } from 'socket.io-client';

let device;
let stream;

export function provider(uri) {
  // connect to the SFU
  const socket = io(uri, {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    path: '/ws',
    transports: ['websocket'],
  });

  // promisify the socket requests
  const socketRequest = (type, data = {}) => {
    return new Promise((resolve) => socket.emit(type, data, resolve));
  };

  // upon connection to the SFU, begin loading the device
  socket.on('connect', async () => {
    console.log('connected to SFU websocket');
    const rtdCapabilities = await socketRequest('getRouterRtpCapabilities');
    await loadDevice(rtdCapabilities);

    if (device.canProduce('video')) {
      console.log('can produce video');
    }

    console.log('send to socket: createProducerTransport');
    const data: any = await socketRequest('createProducerTransport', {
      forceTcp: false,
      rtpCapabilities: device.rtpCapabilities,
    });
    if (data.error) {
      console.error(data.error);
      return;
    }

    const transport = device.createSendTransport(data);
    transport.on('connect', async ({ dtlsParameters }, callback, errback) => {
      console.log('send to socket: connectProducerTransport');
      socketRequest('connectProducerTransport', { dtlsParameters })
        .then(callback)
        .catch(errback);
    });

    transport.on(
      'produce',
      async ({ kind, rtpParameters }, callback, errback) => {
        try {
          const { id }: any = await socketRequest('produce', {
            transportId: transport.id,
            kind,
            rtpParameters,
          });
          callback({ id });
        } catch (err) {
          errback(err);
        }
      },
    );

    transport.on('connectionstatechange', (state) => {
      switch (state) {
        case 'connecting':
          console.log('transport::connectionstatechange: connecting');
          break;

        case 'connected':
          // document.querySelector("#local_video").srcObject = stream;
          console.log('transport::connectionstatechange: connected');
          break;

        case 'failed':
          transport.close();
          console.log('transport::connectionstatechange: failed');
          break;

        default:
          break;
      }
    });

    try {
      stream = await getUserMedia(transport);
      const track = stream.getVideoTracks()[0];
      const params = { track };
      // const _producer = await transport.produce(params);
      await transport.produce(params);
    } catch (err) {
      console.log('err: ', err);
    }
  });

  socket.on('message', function (event, data) {
    console.log('receiving message');
    console.log(event);
    console.log(data);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });
}

function getUserMedia(_transport) {
  console.log('getUserMedia()');
  const stream = {
    getVideoTracks: () => [
      { kind: 'video', id: '1', addEventListener: () => {} },
    ],
  };
  return new Promise((resolve, _reject) => resolve(stream));
}

async function loadDevice(routerRtpCapabilities) {
  try {
    device = new Device();
  } catch (error) {
    if (error.name === 'UnsupportedError') {
      console.error('browser not supported');
    }
  }
  await device.load({ routerRtpCapabilities });
}
