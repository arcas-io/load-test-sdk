import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WebRtcClient as _webrtc_WebRtcClient, WebRtcDefinition as _webrtc_WebRtcDefinition } from './webrtc/WebRtc';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  webrtc: {
    CreateSessionRequest: MessageTypeDefinition
    CreateSessionResponse: MessageTypeDefinition
    WebRtc: SubtypeConstructor<typeof grpc.Client, _webrtc_WebRtcClient> & { service: _webrtc_WebRtcDefinition }
  }
}

