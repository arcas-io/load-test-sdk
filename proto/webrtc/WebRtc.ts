// Original file: ../../rust/server/proto/webrtc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePeerConnectionRequest as _webrtc_CreatePeerConnectionRequest, CreatePeerConnectionRequest__Output as _webrtc_CreatePeerConnectionRequest__Output } from '../webrtc/CreatePeerConnectionRequest';
import type { CreatePeerConnectionResponse as _webrtc_CreatePeerConnectionResponse, CreatePeerConnectionResponse__Output as _webrtc_CreatePeerConnectionResponse__Output } from '../webrtc/CreatePeerConnectionResponse';
import type { CreateSessionRequest as _webrtc_CreateSessionRequest, CreateSessionRequest__Output as _webrtc_CreateSessionRequest__Output } from '../webrtc/CreateSessionRequest';
import type { CreateSessionResponse as _webrtc_CreateSessionResponse, CreateSessionResponse__Output as _webrtc_CreateSessionResponse__Output } from '../webrtc/CreateSessionResponse';
import type { Empty as _webrtc_Empty, Empty__Output as _webrtc_Empty__Output } from '../webrtc/Empty';
import type { GetStatsRequest as _webrtc_GetStatsRequest, GetStatsRequest__Output as _webrtc_GetStatsRequest__Output } from '../webrtc/GetStatsRequest';
import type { GetStatsResponse as _webrtc_GetStatsResponse, GetStatsResponse__Output as _webrtc_GetStatsResponse__Output } from '../webrtc/GetStatsResponse';
import type { StartSessionRequest as _webrtc_StartSessionRequest, StartSessionRequest__Output as _webrtc_StartSessionRequest__Output } from '../webrtc/StartSessionRequest';
import type { StopSessionRequest as _webrtc_StopSessionRequest, StopSessionRequest__Output as _webrtc_StopSessionRequest__Output } from '../webrtc/StopSessionRequest';

export interface WebRtcClient extends grpc.Client {
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreatePeerConnectionResponse__Output) => void): grpc.ClientUnaryCall;
  
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  CreateSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  createSession(argument: _webrtc_CreateSessionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSessionResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetStats(argument: _webrtc_GetStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  GetStats(argument: _webrtc_GetStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  GetStats(argument: _webrtc_GetStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  GetStats(argument: _webrtc_GetStatsRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  getStats(argument: _webrtc_GetStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  getStats(argument: _webrtc_GetStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  getStats(argument: _webrtc_GetStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  getStats(argument: _webrtc_GetStatsRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_GetStatsResponse__Output) => void): grpc.ClientUnaryCall;
  
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
  CreatePeerConnection: grpc.handleUnaryCall<_webrtc_CreatePeerConnectionRequest__Output, _webrtc_CreatePeerConnectionResponse>;
  
  CreateSession: grpc.handleUnaryCall<_webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse>;
  
  GetStats: grpc.handleUnaryCall<_webrtc_GetStatsRequest__Output, _webrtc_GetStatsResponse>;
  
  StartSession: grpc.handleUnaryCall<_webrtc_StartSessionRequest__Output, _webrtc_Empty>;
  
  StopSession: grpc.handleUnaryCall<_webrtc_StopSessionRequest__Output, _webrtc_Empty>;
  
}

export interface WebRtcDefinition extends grpc.ServiceDefinition {
  CreatePeerConnection: MethodDefinition<_webrtc_CreatePeerConnectionRequest, _webrtc_CreatePeerConnectionResponse, _webrtc_CreatePeerConnectionRequest__Output, _webrtc_CreatePeerConnectionResponse__Output>
  CreateSession: MethodDefinition<_webrtc_CreateSessionRequest, _webrtc_CreateSessionResponse, _webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse__Output>
  GetStats: MethodDefinition<_webrtc_GetStatsRequest, _webrtc_GetStatsResponse, _webrtc_GetStatsRequest__Output, _webrtc_GetStatsResponse__Output>
  StartSession: MethodDefinition<_webrtc_StartSessionRequest, _webrtc_Empty, _webrtc_StartSessionRequest__Output, _webrtc_Empty__Output>
  StopSession: MethodDefinition<_webrtc_StopSessionRequest, _webrtc_Empty, _webrtc_StopSessionRequest__Output, _webrtc_Empty__Output>
}
