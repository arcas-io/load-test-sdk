/* eslint-disable */
/* tslint-disable */

// TODO: remove unused once this implementation is complete

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
  remoteDescription: RTCSessionDescription | null;
  readonly sctp: any;
  readonly signalingState: RTCSignalingState;

  constructor(_configuration: RTCConfiguration) {
    console.log('ShimRTCPeerConnection::constructor()', _configuration);
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

  async addTrack(
    track: MediaStreamTrack,
    ..._streams: MediaStream[]
  ): Promise<any> {
    console.log('ShimRTCPeerConnection::addTrack()', track);

    // callback
    await (global as any).addTrackCallback(track);

    return true;
  }

  async addTransceiver(
    _trackOrKind: MediaStreamTrack | string,
    _init?: RTCRtpTransceiverInit,
  ): Promise<RTCRtpTransceiver> {
    console.log('addTransceiver::addTrack()', _trackOrKind);

    // callback
    await (global as any).addTransceiverCallback();

    return {} as RTCRtpTransceiver;
  }

  close(): void {
    throw new Error('todo');
  }

  async createAnswer(options?: RTCOfferAnswerOptions): Promise<any> {
    console.log('ShimRTCPeerConnection::createAnswer()', options);

    // callback
    const answer = await (global as any).createAnswerCallback(options);

    return { sdp: answer.sdp, type: 'answer' };
  }

  createDataChannel(
    _label: string,
    _dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel {
    throw new Error('todo');
  }

  async createOffer(options?: RTCOfferAnswerOptions): Promise<any> {
    console.log('ShimRTCPeerConnection::createOffer()', options);

    const offer = await (global as any).createOfferCallback(options);
    // this.localDescription = offer as RTCSessionDescription;
    // await (global as any).setLocalDescriptionCallback(this.localDescription);

    return offer;
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
    console.log('ShimRTCPeerConnection::setLocalDescription()');

    // callback
    await (global as any).setLocalDescriptionCallback(description);

    this.localDescription = description as RTCSessionDescription;
  }

  // "answer" in the test case
  async setRemoteDescription(
    description: RTCSessionDescriptionInit,
  ): Promise<void> {
    console.log('ShimRTCPeerConnection::setRemoteDescription()');

    // callback
    await (global as any).setRemoteDescriptionCallback(description);

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
    console.log('ShimRTCPeerConnection::addEventListener()', _type, _listener);
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
    console.log('ShimMediaStream::addTrack()', track);
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

export function setup(
  createOfferCallback,
  createAnswerCallback,
  setLocalDescriptionCallback,
  setRemoteDescriptionCallback,
  addTrackCallback,
  addTransceiverCallback,
) {
  // detect the right kind of global object
  global.RTCPeerConnection = ShimRTCPeerConnection as any;
  global.navigator = {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3396.62 Safari/537.36',
  } as any;
  global.MediaStream = ShimMediaStream as any;
  (global as any).createOfferCallback = createOfferCallback;
  (global as any).createAnswerCallback = createAnswerCallback;
  (global as any).setLocalDescriptionCallback = setLocalDescriptionCallback;
  (global as any).setRemoteDescriptionCallback = setRemoteDescriptionCallback;
  (global as any).addTrackCallback = addTrackCallback;
  (global as any).addTransceiverCallback = addTransceiverCallback;
}
