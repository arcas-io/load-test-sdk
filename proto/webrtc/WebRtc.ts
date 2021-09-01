// Original file: ../../rust/server/proto/webrtc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateSessionRequest as _webrtc_CreateSessionRequest, CreateSessionRequest__Output as _webrtc_CreateSessionRequest__Output } from '../webrtc/CreateSessionRequest';
import type { CreateSessionResponse as _webrtc_CreateSessionResponse, CreateSessionResponse__Output as _webrtc_CreateSessionResponse__Output } from '../webrtc/CreateSessionResponse';

export interface WebRtcClient extends grpc.Client {
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface WebRtcHandlers extends grpc.UntypedServiceImplementation {
  CreateSession: grpc.handleUnaryCall<_webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse>;
  
}

export interface WebRtcDefinition extends grpc.ServiceDefinition {
  CreateSession: MethodDefinition<_webrtc_CreateSessionRequest, _webrtc_CreateSessionResponse, _webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse__Output>
}
