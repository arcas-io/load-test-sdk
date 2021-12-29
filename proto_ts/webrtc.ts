import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { WebRtcClient as _webrtc_WebRtcClient, WebRtcDefinition as _webrtc_WebRtcDefinition } from './webrtc/WebRtc';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  webrtc: {
    AddTrackRequest: MessageTypeDefinition
    AddTransceiverRequest: MessageTypeDefinition
    CreatePeerConnectionRequest: MessageTypeDefinition
    CreateSDPRequest: MessageTypeDefinition
    CreateSDPResponse: MessageTypeDefinition
    CreateSessionRequest: MessageTypeDefinition
    CreateSessionResponse: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetStatsRequest: MessageTypeDefinition
    GetStatsResponse: MessageTypeDefinition
    GetTransceiversRequest: MessageTypeDefinition
    GetTransceiversResponse: MessageTypeDefinition
    IceCandidate: MessageTypeDefinition
    LogLevel: EnumTypeDefinition
    MediaType: EnumTypeDefinition
    ObserverRequest: MessageTypeDefinition
    PeerConnectionObserverMessage: MessageTypeDefinition
    PeerConnectionState: MessageTypeDefinition
    SDPType: EnumTypeDefinition
    SessionStats: MessageTypeDefinition
    SetSDPRequest: MessageTypeDefinition
    SetSDPResponse: MessageTypeDefinition
    StartSessionRequest: MessageTypeDefinition
    StopSessionRequest: MessageTypeDefinition
    Transceiver: MessageTypeDefinition
    TransceiverDirection: EnumTypeDefinition
    VideoTransceiver: MessageTypeDefinition
    WebRtc: SubtypeConstructor<typeof grpc.Client, _webrtc_WebRtcClient> & { service: _webrtc_WebRtcDefinition }
  }
}

