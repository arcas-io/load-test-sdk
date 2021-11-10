import { WebRtcClient } from './../proto/webrtc/WebRtc';

export class PeerConnection {
  constructor(public id: string, public client: WebRtcClient) {}
}
