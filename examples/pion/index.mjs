import { Session, setup } from './../build/src/index.js';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

const URL = 'http://localhost:8080/';
const SERVERS = ['[::1]:50051'];
const PROTO_PATH = './../proto/webrtc.proto';

const session = await Session.create({
  name: 'First Session',
  servers: SERVERS,
  protoPath: PROTO_PATH,
  logLevel: 'NONE',
  pollingStateS: 1,
});
setup(session);

for (let i = 0; i < 1000; i++) {
  console.log('starting session', i);
  let pc = new RTCPeerConnection({
    iceServers: ['stun:stun.l.google.com:19302'],
  });

  await pc.addTransceiver('video');
  await pc.addTransceiver('audio');

  let offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  console.log(JSON.stringify(offer));

  let res = await fetch('http://localhost:8080/doSignaling', {
    method: 'POST',
    body: JSON.stringify(offer),
  });

  let body = await res.json();
  await pc.setRemoteDescription(body);
}
