/* eslint-disable */
/* tslint-disable */

// TODO: remove once we're sending this to the gRPC server
import { offer } from '../fixtures/sdp';

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

    // TODO: create the offer on the gRPC server, use output
    // to replace the "offer" below

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

  // "offer" in the test case
  setLocalDescription(description?: RTCSessionDescriptionInit): Promise<void> {
    console.log('shim::setLocalDescription()', description);

    // callback
    (global as any).setLocalDescriptionCallback(description);

    this.localDescription = description as RTCSessionDescription;
    return new Promise((resolve, _reject) => resolve());
  }

  // "answer" in the test case
  setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void> {
    console.log('shim::setRemoteDescription()', description);

    // callback
    (global as any).setRemoteDescriptionCallback(description);

    this.remoteDescription = description as RTCSessionDescription;
    return new Promise((resolve, _reject) => resolve());
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

export function setup(
  setLocalDescriptionCallback,
  setRemoteDescriptionCallback,
) {
  // detect the right kind of global object
  global.RTCPeerConnection = ShimRTCPeerConnection;
  global.navigator = {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36',
  } as any;
  global.MediaStream = ShimMediaStream as any;
  (global as any).setLocalDescriptionCallback = setLocalDescriptionCallback;
  (global as any).setRemoteDescriptionCallback = setRemoteDescriptionCallback;
}
