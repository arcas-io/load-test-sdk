/* eslint-disable */
/* tslint-disable */

import { Device } from 'mediasoup-client';
import { io } from 'socket.io-client';
import { v4 } from 'uuid';

let device;
let stream;
let socketRequest;

export async function provider(uri, callback) {
  // connect to the SFU
  const socket = io(uri, {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    path: '/ws',
    transports: ['websocket'],
  });

  // promisify the socket requests
  socketRequest = (type, data = {}) => {
    return new Promise((resolve) => socket.emit(type, data, resolve));
  };

  // upon connection to the SFU, begin loading the device
  socket.on('connect', async () => {
    // console.log('MediaSoup: connected to SFU websocket');
    const rtpCapabilities = await socketRequest('getRouterRtpCapabilities');
    device = await loadDevice(rtpCapabilities);

    if (device.canProduce('video')) {
      // console.log('MediaSoup: can produce video');
    }

    callback(device);
  });

  socket.on('message', function (event, data) {
    // console.log('MediaSoup: receiving message');
    // console.log(event);
    // console.log(data);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });
}

export async function createTransport(device) {
  // console.log('MediaSoup: send to socket: createProducerTransport');
  let producerId = v4();
  const data: any = await socketRequest('createProducerTransport', {
    id: producerId,
    forceTcp: false,
    rtpCapabilities: device.rtpCapabilities,
  });
  if (data.error) {
    console.error(data.error);
    return;
  }

  const transport = device.createSendTransport(data);

  transport.on('connect', async ({ dtlsParameters }, callback, errback) => {
    // console.log('MediaSoup: send to socket: connectProducerTransport');
    socketRequest('connectProducerTransport', {
      dtlsParameters,
      id: producerId,
    })
      .then(callback)
      .catch(errback);
  });

  transport.on(
    'produce',
    async ({ kind, rtpParameters }, callback, errback) => {
      try {
        const { id }: any = await socketRequest('produce', {
          id: producerId,
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
        // console.log('MediaSoup: transport::connectionstatechange: connecting');
        break;

      case 'connected':
        // document.querySelector("#local_video").srcObject = stream;
        // console.log('MediaSoup: transport::connectionstatechange: connected');
        break;

      case 'failed':
        transport.close();
        // console.log('MediaSoup: transport::connectionstatechange: failed');
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
    console.log('MediaSoup: getUserMedia/product error: ', err);
  }
}

export async function getUserMedia(_transport) {
  const stream = {
    getVideoTracks: () => [
      { kind: 'video', id: '', addEventListener: () => {} },
    ],
  };
  return stream;
}

async function loadDevice(routerRtpCapabilities) {
  try {
    device = new Device();
    await device.load({ routerRtpCapabilities });

    return device;
  } catch (error) {
    if (error.name === 'UnsupportedError') {
      console.error('MediaSoup: browser not supported');
    }
  }
}
