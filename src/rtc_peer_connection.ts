/* eslint-disable */
/* tslint-disable */

// import { Session, CreatePeerConnectionOptions } from './session';

class RTCPeerConnection extends EventTarget {
  readonly canTrickleIceCandidates: boolean | null;
  readonly connectionState: RTCPeerConnectionState;
  readonly currentLocalDescription: RTCSessionDescription | null;
  readonly currentRemoteDescription: RTCSessionDescription | null;
  readonly iceConnectionState: RTCIceConnectionState;
  readonly iceGatheringState: RTCIceGatheringState;
  readonly idpErrorInfo: string | null;
  readonly idpLoginUrl: string | null;
  readonly localDescription: RTCSessionDescription | null;
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
  readonly peerIdentity: Promise<RTCIdentityAssertion>;
  readonly pendingLocalDescription: RTCSessionDescription | null;
  readonly pendingRemoteDescription: RTCSessionDescription | null;
  readonly remoteDescription: RTCSessionDescription | null;
  readonly sctp: RTCSctpTransport | null;
  readonly signalingState: RTCSignalingState;

  constructor(configuration: RTCConfiguration) {
    super();
    // const options: CreatePeerConnectionOptions = { name };
    // this.session.createPeerConnection(options);
  }

  static generateCertificate(
    keygenAlgorithm: AlgorithmIdentifier,
  ): Promise<RTCCertificate> {
    throw new Error('todo');
  }

  addIceCandidate(
    candidate: RTCIceCandidateInit | RTCIceCandidate,
  ): Promise<void> {
    throw new Error('todo');
  }

  addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender {
    throw new Error('todo');
  }

  addTransceiver(
    trackOrKind: MediaStreamTrack | string,
    init?: RTCRtpTransceiverInit,
  ): RTCRtpTransceiver {
    throw new Error('todo');
  }

  close(): void {
    throw new Error('todo');
  }

  createAnswer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
    throw new Error('todo');
  }

  createDataChannel(
    label: string,
    dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel {
    throw new Error('todo');
  }

  createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
    throw new Error('todo');
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
    throw new Error('todo');
  }

  getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport> {
    throw new Error('todo');
  }

  getTransceivers(): RTCRtpTransceiver[] {
    throw new Error('todo');
  }

  removeTrack(sender: RTCRtpSender): void {
    throw new Error('todo');
  }

  restartIce(): void {
    throw new Error('todo');
  }

  setConfiguration(configuration?: RTCConfiguration): void {
    throw new Error('todo');
  }

  setIdentityProvider(
    provider: string,
    options?: RTCIdentityProviderOptions,
  ): void {
    throw new Error('todo');
  }

  setLocalDescription(description?: RTCSessionDescriptionInit): Promise<void> {
    throw new Error('todo');
  }

  setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void> {
    throw new Error('todo');
  }

  addEventListener<K extends keyof RTCPeerConnectionEventMap>(
    type: K,
    listener: (
      this: RTCPeerConnection,
      ev: RTCPeerConnectionEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void {
    throw new Error('todo');
  }

  removeEventListener<K extends keyof RTCPeerConnectionEventMap>(
    type: K,
    listener: (
      this: RTCPeerConnection,
      ev: RTCPeerConnectionEventMap[K],
    ) => any,
    options?: boolean | EventListenerOptions,
  ): void {
    throw new Error('todo');
  }
}

export function setup() {
  // detect the right kind of global object
  global.RTCPeerConnection = RTCPeerConnection;
}

// add navigator shim and expose the user-agent string that is appropritate for us.
// For example if we're emulating Chrome64 we use that version so libraries use their older
// shims which use less interfaces we need to support.
