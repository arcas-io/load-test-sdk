/* eslint-disable */
/* tslint-disable */

import { ClientReadableStream } from '@grpc/grpc-js';
import { PeerConnectionObserverMessage__Output } from '../proto_ts/webrtc/PeerConnectionObserverMessage';
import { Queue } from './queue';
import { Session } from './session';

class ShimTrack {
  addEventListener() {}
}

class ShimTransceiver {
  mid: number;
  currentDirection = 'sendrecv';
  direction: string;
  receiver = { track: new ShimTrack() };
  sender = {};

  constructor(mid: number, direction: string) {
    this.mid = mid;
    this.direction = direction;
    this.currentDirection = direction;
  }

  setDirection() {
    // todo: make the GRPC call to do set direction
  }
}

export class ShimRTCPeerConnection {
  lastMID = 0;
  peerConnectionId: string;
  queue: Queue;
  #transceivers = [];

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

  private getSession(): Session {
    return (global as any).session;
  }

  async startObserving(
    observer: ClientReadableStream<PeerConnectionObserverMessage__Output>,
  ) {
    observer.on('data', (data) => {
      switch (data.event) {
        case 'ice_candidate':
          break;
        case 'video_transceiver':
          this.#transceivers.push(
            new ShimTransceiver(
              data.video_transceiver.mid,
              data.video_transceiver.direction,
            ),
          );
          break;
      }
    });
  }

  constructor(_configuration: RTCConfiguration) {
    this.queue = new Queue();
    // Create the peer connection directly on the server...
    this.queue.queue_call(async () => {
      // TODO: Support passing ICE servers... This is important.
      let { peer_connection_id } = await this.getSession().createPeerConnection(
        {
          name: 'ShimRTCPeerConnection',
        },
      );
      this.peerConnectionId = peer_connection_id;

      let observer = this.getSession().observe({
        peer_connection_id,
      });
      this.startObserving(observer);
    });
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

    return this.queue.queue_call(async () => {
      try {
        return await this.getSession().addTrack({
          peer_connection_id: this.peerConnectionId,
          track_id: track.id,
          track_label: track.label,
        });
      } catch (e) {
        console.error('cbAddTrack error: ', e.details);
        throw e;
      }
    });
  }

  addTransceiver(
    trackOrKind: MediaStreamTrack | string,
    init?: RTCRtpTransceiverInit,
  ): Promise<RTCRtpTransceiver> {
    let mid = this.lastMID++;
    this.queue.queue_call(async () => {
      try {
        return await this.getSession().addTransceiver({
          peer_connection_id: this.peerConnectionId,
          ...(trackOrKind as any),
        });
      } catch (e) {
        console.error('cbAddTransceiver error: ', e.details);
        throw e;
      }
    });
    let transceiver = new ShimTransceiver(
      mid,
      init && init.direction ? init.direction : 'sendrecv',
    ) as any;
    this.#transceivers.push(transceiver);
    return transceiver as any;
  }

  close(): void {
    throw new Error('todo');
  }

  async createAnswer(options?: RTCOfferAnswerOptions): Promise<any> {
    // console.log('ShimRTCPeerConnection::createAnswer()', options);

    return this.queue.queue_call(async () => {
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
    });
  }

  createDataChannel(
    _label: string,
    _dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel {
    throw new Error('todo');
  }

  async createOffer(_options?: RTCOfferAnswerOptions): Promise<any> {
    // console.log('ShimRTCPeerConnection::createOffer()');
    return this.queue.queue_call(async () => {
      let offer;
      try {
        offer = await (global as any).session.createOffer({
          peer_connection_id: this.peerConnectionId,
        });
      } catch (e) {
        console.error('cbCreateOffer error: ', e.details);
        throw e;
      }

      return { sdp: offer.sdp, type: 'offer' };
    });
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
    return this.#transceivers;
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
    this.localDescription = description as RTCSessionDescription;
    return this.queue.queue_call(async () => {
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
    });
  }

  async setRemoteDescription(
    description: RTCSessionDescriptionInit,
  ): Promise<void> {
    // console.log('ShimRTCPeerConnection::setRemoteDescription()');

    this.remoteDescription = description as RTCSessionDescription;
    return this.queue.queue_call(async () => {
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
    });
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
  addTrack(_track: MediaStreamTrack): void {
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
