// Original file: ../../rust/server/proto/webrtc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateSessionRequest as _webrtc_CreateSessionRequest, CreateSessionRequest__Output as _webrtc_CreateSessionRequest__Output } from '../webrtc/CreateSessionRequest';
import type { CreateSessionResponse as _webrtc_CreateSessionResponse, CreateSessionResponse__Output as _webrtc_CreateSessionResponse__Output } from '../webrtc/CreateSessionResponse';
import type { Empty as _webrtc_Empty, Empty__Output as _webrtc_Empty__Output } from '../webrtc/Empty';
import type { StartSessionRequest as _webrtc_StartSessionRequest, StartSessionRequest__Output as _webrtc_StartSessionRequest__Output } from '../webrtc/StartSessionRequest';
import type { StopSessionRequest as _webrtc_StopSessionRequest, StopSessionRequest__Output as _webrtc_StopSessionRequest__Output } from '../webrtc/StopSessionRequest';

export interface WebRtcClient extends grpc.Client {
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  
  StartSession(argument: _webrtc_StartSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StartSession(argument: _webrtc_StartSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StartSession(argument: _webrtc_StartSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StartSession(argument: _webrtc_StartSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  startSession(argument: _webrtc_StartSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  startSession(argument: _webrtc_StartSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  startSession(argument: _webrtc_StartSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  startSession(argument: _webrtc_StartSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  
  StopSession(argument: _webrtc_StopSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StopSession(argument: _webrtc_StopSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StopSession(argument: _webrtc_StopSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  StopSession(argument: _webrtc_StopSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  stopSession(argument: _webrtc_StopSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  stopSession(argument: _webrtc_StopSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  stopSession(argument: _webrtc_StopSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  stopSession(argument: _webrtc_StopSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

export interface WebRtcHandlers extends grpc.UntypedServiceImplementation {
  CreateSession: grpc.handleUnaryCall<_webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse>;
  
  StartSession: grpc.handleUnaryCall<_webrtc_StartSessionRequest__Output, _webrtc_Empty>;
  
  StopSession: grpc.handleUnaryCall<_webrtc_StopSessionRequest__Output, _webrtc_Empty>;
  
}

export interface WebRtcDefinition extends grpc.ServiceDefinition {
  CreateSession: MethodDefinition<_webrtc_CreateSessionRequest, _webrtc_CreateSessionResponse, _webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse__Output>
  StartSession: MethodDefinition<_webrtc_StartSessionRequest, _webrtc_Empty, _webrtc_StartSessionRequest__Output, _webrtc_Empty__Output>
  StopSession: MethodDefinition<_webrtc_StopSessionRequest, _webrtc_Empty, _webrtc_StopSessionRequest__Output, _webrtc_Empty__Output>
}
