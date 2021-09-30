/* eslint-disable */
/* tslint-disable */

// import { Session, CreatePeerConnectionOptions } from './session';

class ShimRTCPeerConnection {
  readonly canTrickleIceCandidates: boolean | null;
  readonly connectionState: RTCPeerConnectionState;
  readonly currentLocalDescription: RTCSessionDescription | null;
  readonly currentRemoteDescription: RTCSessionDescription | null;
  readonly iceConnectionState: RTCIceConnectionState;
  readonly iceGatheringState: RTCIceGatheringState;
  readonly idpErrorInfo: string | null;
  readonly idpLoginUrl: string | null;
  localDescription: RTCSessionDescription | null;
  onconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
  ondatachannel:
    | ((this: RTCPeerConnection, ev: RTCDataChannelEvent) => any)
    | null;
  onicecandidate:
    | ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any)
    | null;
  onicecandidateerror:
    | ((this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any)
    | null;
  oniceconnectionstatechange:
    | ((this: RTCPeerConnection, ev: Event) => any)
    | null;
  onicegatheringstatechange:
    | ((this: RTCPeerConnection, ev: Event) => any)
    | null;
  onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => any) | null;
  onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
  ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => any) | null;
  readonly peerIdentity: Promise<any>;
  readonly pendingLocalDescription: RTCSessionDescription | null;
  readonly pendingRemoteDescription: RTCSessionDescription | null;
  readonly remoteDescription: RTCSessionDescription | null;
  readonly sctp: any;
  readonly signalingState: RTCSignalingState;

  constructor(_configuration: RTCConfiguration) {
    // const options: CreatePeerConnectionOptions = { name };
    // this.session.createPeerConnection(options);
  }

  static generateCertificate(
    _keygenAlgorithm: AlgorithmIdentifier,
  ): Promise<RTCCertificate> {
    throw new Error('todo');
  }

  addIceCandidate(
    _candidate: RTCIceCandidateInit | RTCIceCandidate,
  ): Promise<void> {
    throw new Error('todo');
  }

  addTrack(_track: MediaStreamTrack, ..._streams: MediaStream[]): any {
    console.log('shim::addTrack()', _track);
    return true;
  }

  addTransceiver(
    _trackOrKind: MediaStreamTrack | string,
    _init?: RTCRtpTransceiverInit,
  ): RTCRtpTransceiver {
    throw new Error('todo');
  }

  close(): void {
    throw new Error('todo');
  }

  createAnswer(_options?: RTCOfferAnswerOptions): Promise<any> {
    throw new Error('todo');
  }

  createDataChannel(
    _label: string,
    _dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel {
    throw new Error('todo');
  }

  createOffer(_options?: RTCOfferAnswerOptions): Promise<any> {
    console.log('shim::createOffer()', _options);
    return new Promise((resolve, _reject) =>
      resolve({ sdp: offer, type: 'offer' }),
    );
  }

  getConfiguration(): RTCConfiguration {
    throw new Error('todo');
  }

  getIdentityAssertion(): Promise<string> {
    throw new Error('todo');
  }

  getReceivers(): RTCRtpReceiver[] {
    throw new Error('todo');
  }

  getSenders(): RTCRtpSender[] {
    return [{}] as any[];
  }

  getStats(_selector?: MediaStreamTrack | null): Promise<RTCStatsReport> {
    throw new Error('todo');
  }

  getTransceivers(): RTCRtpTransceiver[] {
    throw new Error('todo');
  }

  removeTrack(_sender: RTCRtpSender): void {
    throw new Error('todo');
  }

  restartIce(): void {
    throw new Error('todo');
  }

  setConfiguration(_configuration?: RTCConfiguration): void {
    throw new Error('todo');
  }

  setIdentityProvider(_provider: string, _options?: any): void {
    throw new Error('todo');
  }

  setLocalDescription(_description?: RTCSessionDescriptionInit): Promise<any> {
    console.log('shim::setLocalDescription()');
    this.localDescription = {
      sdp: offer,
      type: 'offer',
    } as RTCSessionDescription;
    return new Promise((resolve, _reject) =>
      resolve({
        sdp: offer,
        type: 'offer',
      }),
    );
  }

  setRemoteDescription(_description: RTCSessionDescriptionInit): Promise<any> {
    console.log('shim::setRemoteDescription()');
    setRemoteDescriptionCallback(_description);
    return new Promise((resolve, _reject) => resolve(_description));
  }

  addEventListener<K extends keyof RTCPeerConnectionEventMap>(
    _type: K,
    _listener: (
      this: RTCPeerConnection,
      ev: RTCPeerConnectionEventMap[K],
    ) => any,
    _options?: boolean | AddEventListenerOptions,
  ): void {
    console.log('shim::addEventListener()', _type, _listener);
  }

  removeEventListener<K extends keyof RTCPeerConnectionEventMap>(
    _type: K,
    _listener: (
      this: RTCPeerConnection,
      ev: RTCPeerConnectionEventMap[K],
    ) => any,
    _options?: boolean | EventListenerOptions,
  ): void {
    throw new Error('todo');
  }

  dispatchEvent(_event: Event): boolean {
    throw new Error('todo');
  }
}

class ShimMediaStream {
  readonly active: boolean;
  readonly id: string;
  onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
  onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
  addTrack(_track: MediaStreamTrack): void {
    console.log('shim::addTrack()', _track);
  }

  clone(): MediaStream {
    throw new Error('todo');
  }

  getAudioTracks(): MediaStreamTrack[] {
    throw new Error('todo');
  }

  getTrackById(_trackId: string): MediaStreamTrack | null {
    throw new Error('todo');
  }

  getTracks(): MediaStreamTrack[] {
    throw new Error('todo');
  }

  getVideoTracks(): MediaStreamTrack[] {
    throw new Error('todo');
  }

  removeTrack(_track: MediaStreamTrack): void {
    throw new Error('todo');
  }

  addEventListener<K extends keyof MediaStreamEventMap>(
    _type: K,
    _listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any,
    _options?: boolean | AddEventListenerOptions,
  ): void {
    throw new Error('todo');
  }
}

let setRemoteDescriptionCallback;

export function setup(callback) {
  // detect the right kind of global object
  global.RTCPeerConnection = ShimRTCPeerConnection;
  global.navigator = {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36',
  } as any;
  global.MediaStream = ShimMediaStream as any;
  setRemoteDescriptionCallback = callback;
}

const offer = `v=0
o=- 7204563722973469576 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1
a=extmap-allow-mixed
a=msid-semantic: WMS 07c5f1fb-1c3d-4db7-8154-9ec25026104b
m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 110 112 113 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:feJm
a=ice-pwd:FUJK6K9ySjD4XyMjfwuxs0BO
a=ice-options:trickle
a=fingerprint:sha-256 FD:B9:2C:12:FB:70:19:3B:7F:68:91:A7:FC:75:FC:41:88:CC:3B:1E:46:FE:2F:B9:E8:C2:2C:1D:FE:55:8F:95
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendonly
a=msid:07c5f1fb-1c3d-4db7-8154-9ec25026104b 1
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=ssrc:2703848715 cname:vaG3+imJC5Ip3ZUy
a=ssrc:2703848715 msid:07c5f1fb-1c3d-4db7-8154-9ec25026104b 1
a=ssrc:2703848715 mslabel:07c5f1fb-1c3d-4db7-8154-9ec25026104b
a=ssrc:2703848715 label:1
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 122 102 121 127 120 125 107 108 109 35 36 124 119 123 118 114 115 116 37
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:feJm
a=ice-pwd:FUJK6K9ySjD4XyMjfwuxs0BO
a=ice-options:trickle
a=fingerprint:sha-256 FD:B9:2C:12:FB:70:19:3B:7F:68:91:A7:FC:75:FC:41:88:CC:3B:1E:46:FE:2F:B9:E8:C2:2C:1D:FE:55:8F:95
a=setup:actpass
a=mid:1
a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:13 urn:3gpp:video-orientation
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=recvonly
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:122 VP9/90000
a=rtcp-fb:122 goog-remb
a=rtcp-fb:122 transport-cc
a=rtcp-fb:122 ccm fir
a=rtcp-fb:122 nack
a=rtcp-fb:122 nack pli
a=fmtp:122 profile-id=1
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:35 AV1X/90000
a=rtcp-fb:35 goog-remb
a=rtcp-fb:35 transport-cc
a=rtcp-fb:35 ccm fir
a=rtcp-fb:35 nack
a=rtcp-fb:35 nack pli
a=rtpmap:36 rtx/90000
a=fmtp:36 apt=35
a=rtpmap:124 H264/90000
a=rtcp-fb:124 goog-remb
a=rtcp-fb:124 transport-cc
a=rtcp-fb:124 ccm fir
a=rtcp-fb:124 nack
a=rtcp-fb:124 nack pli
a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=rtpmap:119 rtx/90000
a=fmtp:119 apt=124
a=rtpmap:123 H264/90000
a=rtcp-fb:123 goog-remb
a=rtcp-fb:123 transport-cc
a=rtcp-fb:123 ccm fir
a=rtcp-fb:123 nack
a=rtcp-fb:123 nack pli
a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=rtpmap:118 rtx/90000
a=fmtp:118 apt=123
a=rtpmap:114 red/90000
a=rtpmap:115 rtx/90000
a=fmtp:115 apt=114
a=rtpmap:116 ulpfec/90000
a=rtpmap:37 flexfec-03/90000
a=rtcp-fb:37 goog-remb
a=rtcp-fb:37 transport-cc
a=fmtp:37 repair-window=10000000
a=ssrc:2703848715 cname:vaG3+imJC5Ip3ZUy
a=ssrc:2703848715 msid:07c5f1fb-1c3d-4db7-8154-9ec25026104b 1
a=ssrc:2703848715 mslabel:07c5f1fb-1c3d-4db7-8154-9ec25026104b
a=ssrc:2703848715 label:1
`;
