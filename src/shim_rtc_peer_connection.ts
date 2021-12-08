/* eslint-disable */
/* tslint-disable */
import { Session } from './session';

// TODO: remove unused once this implementation is complete

class ShimRTCPeerConnection {
  peerConnectionId: String;

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
  remoteDescription: RTCSessionDescription | null;
  readonly sctp: any;
  readonly signalingState: RTCSignalingState;

  constructor(configuration: RTCConfiguration) {
    // console.log(
    //   `ShimRTCPeerConnection::constructor() ${JSON.stringify(configuration)}`,
    // );
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

  async addTrack(
    track: MediaStreamTrack,
    ..._streams: MediaStream[]
  ): Promise<any> {
    // console.log('ShimRTCPeerConnection::addTrack()', track);

    try {
      return await (global as any).session.addTrack({
        peer_connection_id: this.peerConnectionId,
        ...track,
      });
    } catch (e) {
      console.error('cbAddTrack error: ', e.details);
      throw e;
    }
  }

  async addTransceiver(
    trackOrKind: MediaStreamTrack | string,
    _init?: RTCRtpTransceiverInit,
  ): Promise<RTCRtpTransceiver> {
    // console.log(
    //   `addTransceiver::addTransceiver() ${JSON.stringify(trackOrKind)}`,
    // );
    this.peerConnectionId = (trackOrKind as any).id;

    if (_init) {
      try {
        return await (global as any).session.addTransceiver({
          peer_connection_id: this.peerConnectionId,
          ...(trackOrKind as any),
        });
      } catch (e) {
        console.error('cbAddTransceiver error: ', e.details);
        throw e;
      }
    } else {
      // console.log("just getting capabilities, don't add transceiver");
    }

    return {} as RTCRtpTransceiver;
  }

  close(): void {
    throw new Error('todo');
  }

  async createAnswer(options?: RTCOfferAnswerOptions): Promise<any> {
    // console.log('ShimRTCPeerConnection::createAnswer()', options);

    try {
      let answer = await (global as any).session.createAnswer({
        peer_connection_id: this.peerConnectionId,
        ...options,
      });
      return { sdp: answer.sdp, type: 'answer' };
    } catch (e) {
      console.error('cbCreateAnswer error: ', e.details);
      throw e;
    }
  }

  createDataChannel(
    _label: string,
    _dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel {
    throw new Error('todo');
  }

  async createOffer(_options?: RTCOfferAnswerOptions): Promise<any> {
    // console.log('ShimRTCPeerConnection::createOffer()');

    let offer;

    // if the peer connection is undefined, then the client is just detecting capabilities
    if (!this.peerConnectionId) {
      offer = {
        sdp: 'v=0\r\no=- 6188226392136919752 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 0\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 35 36 127 123 125\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:/edD\r\na=ice-pwd:DfTbTpuC4rnmVSdD5UgiN+DU\r\na=ice-options:trickle\r\na=fingerprint:sha-256 98:E0:88:48:B9:50:81:AE:DA:CE:8B:62:F8:AA:3F:92:AB:B0:F2:B2:15:73:D3:CF:E1:D5:5B:29:CF:E1:DE:42\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 urn:3gpp:video-orientation\r\na=extmap:4 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:9 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=sendrecv\r\na=msid:0 test\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:35 AV1X/90000\r\na=rtcp-fb:35 goog-remb\r\na=rtcp-fb:35 transport-cc\r\na=rtcp-fb:35 ccm fir\r\na=rtcp-fb:35 nack\r\na=rtcp-fb:35 nack pli\r\na=rtpmap:36 rtx/90000\r\na=fmtp:36 apt=35\r\na=rtpmap:127 red/90000\r\na=rtpmap:123 rtx/90000\r\na=fmtp:123 apt=127\r\na=rtpmap:125 ulpfec/90000\r\na=ssrc-group:FID 2767310433 1045618324\r\na=ssrc:2767310433 cname:gfaW0YxVdEpFVa7w\r\na=ssrc:2767310433 msid:0 test\r\na=ssrc:2767310433 mslabel:0\r\na=ssrc:2767310433 label:test\r\na=ssrc:1045618324 cname:gfaW0YxVdEpFVa7w\r\na=ssrc:1045618324 msid:0 test\r\na=ssrc:1045618324 mslabel:0\r\na=ssrc:1045618324 label:test\r\n',
      };
    } else {
      try {
        offer = await (global as any).session.createOffer({
          peer_connection_id: this.peerConnectionId,
        });
      } catch (e) {
        console.error('cbCreateOffer error: ', e.details);
        throw e;
      }
    }

    return { sdp: offer.sdp, type: 'offer' };
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

  async setLocalDescription(
    description?: RTCSessionDescriptionInit,
  ): Promise<void> {
    // console.log('ShimRTCPeerConnection::setLocalDescription()');

    try {
      const options = {
        peer_connection_id: this.peerConnectionId,
        sdp: description.sdp,
        sdp_type: description.type,
      };
      await (global as any).session.setLocalDescription(options);
    } catch (e) {
      console.error('cbSetLocalDescription error: ', e.details);
      throw e;
    }

    this.localDescription = description as RTCSessionDescription;
  }

  async setRemoteDescription(
    description: RTCSessionDescriptionInit,
  ): Promise<void> {
    // console.log('ShimRTCPeerConnection::setRemoteDescription()');

    const options = {
      peer_connection_id: this.peerConnectionId,
      sdp: description.sdp,
      sdp_type: description.type,
    };

    try {
      await (global as any).session.setRemoteDescription(options);
    } catch (e) {
      console.error('cbSetRemoteDescription error: ', e.details);
      throw e;
    }

    this.remoteDescription = description as RTCSessionDescription;
  }

  addEventListener<K extends keyof RTCPeerConnectionEventMap>(
    _type: K,
    _listener: (
      this: RTCPeerConnection,
      ev: RTCPeerConnectionEventMap[K],
    ) => any,
    _options?: boolean | AddEventListenerOptions,
  ): void {
    // console.log('ShimRTCPeerConnection::addEventListener()', _type, _listener);
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
  addTrack(track: MediaStreamTrack): void {
    // console.log('ShimMediaStream::addTrack()', track);
    // const { id, label } = track;
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

export function setup(session: Session) {
  // detect the right kind of global object
  global.RTCPeerConnection = ShimRTCPeerConnection as any;
  global.navigator = {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3396.62 Safari/537.36',
  } as any;
  global.MediaStream = ShimMediaStream as any;
  (global as any).session = session;
}
