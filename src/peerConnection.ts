import { WebRtcClient } from './../proto_ts/webrtc/WebRtc';

export class PeerConnection {
  constructor(public id: string, public client: WebRtcClient) {}
}
