// Original file: ../../rust/server/proto/webrtc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddTrackRequest as _webrtc_AddTrackRequest, AddTrackRequest__Output as _webrtc_AddTrackRequest__Output } from '../webrtc/AddTrackRequest';
import type { AddTransceiverRequest as _webrtc_AddTransceiverRequest, AddTransceiverRequest__Output as _webrtc_AddTransceiverRequest__Output } from '../webrtc/AddTransceiverRequest';
import type { CreatePeerConnectionRequest as _webrtc_CreatePeerConnectionRequest, CreatePeerConnectionRequest__Output as _webrtc_CreatePeerConnectionRequest__Output } from '../webrtc/CreatePeerConnectionRequest';
import type { CreateSDPRequest as _webrtc_CreateSDPRequest, CreateSDPRequest__Output as _webrtc_CreateSDPRequest__Output } from '../webrtc/CreateSDPRequest';
import type { CreateSDPResponse as _webrtc_CreateSDPResponse, CreateSDPResponse__Output as _webrtc_CreateSDPResponse__Output } from '../webrtc/CreateSDPResponse';
import type { CreateSessionRequest as _webrtc_CreateSessionRequest, CreateSessionRequest__Output as _webrtc_CreateSessionRequest__Output } from '../webrtc/CreateSessionRequest';
import type { CreateSessionResponse as _webrtc_CreateSessionResponse, CreateSessionResponse__Output as _webrtc_CreateSessionResponse__Output } from '../webrtc/CreateSessionResponse';
import type { Empty as _webrtc_Empty, Empty__Output as _webrtc_Empty__Output } from '../webrtc/Empty';
import type { GetStatsRequest as _webrtc_GetStatsRequest, GetStatsRequest__Output as _webrtc_GetStatsRequest__Output } from '../webrtc/GetStatsRequest';
import type { GetStatsResponse as _webrtc_GetStatsResponse, GetStatsResponse__Output as _webrtc_GetStatsResponse__Output } from '../webrtc/GetStatsResponse';
import type { GetTransceiversRequest as _webrtc_GetTransceiversRequest, GetTransceiversRequest__Output as _webrtc_GetTransceiversRequest__Output } from '../webrtc/GetTransceiversRequest';
import type { GetTransceiversResponse as _webrtc_GetTransceiversResponse, GetTransceiversResponse__Output as _webrtc_GetTransceiversResponse__Output } from '../webrtc/GetTransceiversResponse';
import type { ObserverRequest as _webrtc_ObserverRequest, ObserverRequest__Output as _webrtc_ObserverRequest__Output } from '../webrtc/ObserverRequest';
import type { PeerConnectionObserverMessage as _webrtc_PeerConnectionObserverMessage, PeerConnectionObserverMessage__Output as _webrtc_PeerConnectionObserverMessage__Output } from '../webrtc/PeerConnectionObserverMessage';
import type { SetSDPRequest as _webrtc_SetSDPRequest, SetSDPRequest__Output as _webrtc_SetSDPRequest__Output } from '../webrtc/SetSDPRequest';
import type { SetSDPResponse as _webrtc_SetSDPResponse, SetSDPResponse__Output as _webrtc_SetSDPResponse__Output } from '../webrtc/SetSDPResponse';
import type { StartSessionRequest as _webrtc_StartSessionRequest, StartSessionRequest__Output as _webrtc_StartSessionRequest__Output } from '../webrtc/StartSessionRequest';
import type { StopSessionRequest as _webrtc_StopSessionRequest, StopSessionRequest__Output as _webrtc_StopSessionRequest__Output } from '../webrtc/StopSessionRequest';

export interface WebRtcClient extends grpc.Client {
  AddTrack(argument: _webrtc_AddTrackRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTrack(argument: _webrtc_AddTrackRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTrack(argument: _webrtc_AddTrackRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTrack(argument: _webrtc_AddTrackRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTrack(argument: _webrtc_AddTrackRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTrack(argument: _webrtc_AddTrackRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTrack(argument: _webrtc_AddTrackRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTrack(argument: _webrtc_AddTrackRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  
  AddTransceiver(argument: _webrtc_AddTransceiverRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTransceiver(argument: _webrtc_AddTransceiverRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTransceiver(argument: _webrtc_AddTransceiverRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  AddTransceiver(argument: _webrtc_AddTransceiverRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTransceiver(argument: _webrtc_AddTransceiverRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTransceiver(argument: _webrtc_AddTransceiverRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTransceiver(argument: _webrtc_AddTransceiverRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  addTransceiver(argument: _webrtc_AddTransceiverRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  
  CreateAnswer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateAnswer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateAnswer(argument: _webrtc_CreateSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateAnswer(argument: _webrtc_CreateSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createAnswer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createAnswer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createAnswer(argument: _webrtc_CreateSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createAnswer(argument: _webrtc_CreateSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  
  CreateOffer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateOffer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateOffer(argument: _webrtc_CreateSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  CreateOffer(argument: _webrtc_CreateSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createOffer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createOffer(argument: _webrtc_CreateSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createOffer(argument: _webrtc_CreateSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  createOffer(argument: _webrtc_CreateSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_CreateSDPResponse__Output) => void): grpc.ClientUnaryCall;
  
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  CreatePeerConnection(argument: _webrtc_CreatePeerConnectionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  createPeerConnection(argument: _webrtc_CreatePeerConnectionRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_Empty__Output) => void): grpc.ClientUnaryCall;
  
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
  
  GetTransceivers(argument: _webrtc_GetTransceiversRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  GetTransceivers(argument: _webrtc_GetTransceiversRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  GetTransceivers(argument: _webrtc_GetTransceiversRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  GetTransceivers(argument: _webrtc_GetTransceiversRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  getTransceivers(argument: _webrtc_GetTransceiversRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  getTransceivers(argument: _webrtc_GetTransceiversRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  getTransceivers(argument: _webrtc_GetTransceiversRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  getTransceivers(argument: _webrtc_GetTransceiversRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_GetTransceiversResponse__Output) => void): grpc.ClientUnaryCall;
  
  Observer(argument: _webrtc_ObserverRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_webrtc_PeerConnectionObserverMessage__Output>;
  Observer(argument: _webrtc_ObserverRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_webrtc_PeerConnectionObserverMessage__Output>;
  observer(argument: _webrtc_ObserverRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_webrtc_PeerConnectionObserverMessage__Output>;
  observer(argument: _webrtc_ObserverRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_webrtc_PeerConnectionObserverMessage__Output>;
  
  SetLocalDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetLocalDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetLocalDescription(argument: _webrtc_SetSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetLocalDescription(argument: _webrtc_SetSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setLocalDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setLocalDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setLocalDescription(argument: _webrtc_SetSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setLocalDescription(argument: _webrtc_SetSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  
  SetRemoteDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetRemoteDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetRemoteDescription(argument: _webrtc_SetSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  SetRemoteDescription(argument: _webrtc_SetSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setRemoteDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setRemoteDescription(argument: _webrtc_SetSDPRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setRemoteDescription(argument: _webrtc_SetSDPRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  setRemoteDescription(argument: _webrtc_SetSDPRequest, callback: (error?: grpc.ServiceError, result?: _webrtc_SetSDPResponse__Output) => void): grpc.ClientUnaryCall;
  
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
  AddTrack: grpc.handleUnaryCall<_webrtc_AddTrackRequest__Output, _webrtc_Empty>;
  
  AddTransceiver: grpc.handleUnaryCall<_webrtc_AddTransceiverRequest__Output, _webrtc_Empty>;
  
  CreateAnswer: grpc.handleUnaryCall<_webrtc_CreateSDPRequest__Output, _webrtc_CreateSDPResponse>;
  
  CreateOffer: grpc.handleUnaryCall<_webrtc_CreateSDPRequest__Output, _webrtc_CreateSDPResponse>;
  
  CreatePeerConnection: grpc.handleUnaryCall<_webrtc_CreatePeerConnectionRequest__Output, _webrtc_Empty>;
  
  CreateSession: grpc.handleUnaryCall<_webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse>;
  
  GetStats: grpc.handleUnaryCall<_webrtc_GetStatsRequest__Output, _webrtc_GetStatsResponse>;
  
  GetTransceivers: grpc.handleUnaryCall<_webrtc_GetTransceiversRequest__Output, _webrtc_GetTransceiversResponse>;
  
  Observer: grpc.handleServerStreamingCall<_webrtc_ObserverRequest__Output, _webrtc_PeerConnectionObserverMessage>;
  
  SetLocalDescription: grpc.handleUnaryCall<_webrtc_SetSDPRequest__Output, _webrtc_SetSDPResponse>;
  
  SetRemoteDescription: grpc.handleUnaryCall<_webrtc_SetSDPRequest__Output, _webrtc_SetSDPResponse>;
  
  StartSession: grpc.handleUnaryCall<_webrtc_StartSessionRequest__Output, _webrtc_Empty>;
  
  StopSession: grpc.handleUnaryCall<_webrtc_StopSessionRequest__Output, _webrtc_Empty>;
  
}

export interface WebRtcDefinition extends grpc.ServiceDefinition {
  AddTrack: MethodDefinition<_webrtc_AddTrackRequest, _webrtc_Empty, _webrtc_AddTrackRequest__Output, _webrtc_Empty__Output>
  AddTransceiver: MethodDefinition<_webrtc_AddTransceiverRequest, _webrtc_Empty, _webrtc_AddTransceiverRequest__Output, _webrtc_Empty__Output>
  CreateAnswer: MethodDefinition<_webrtc_CreateSDPRequest, _webrtc_CreateSDPResponse, _webrtc_CreateSDPRequest__Output, _webrtc_CreateSDPResponse__Output>
  CreateOffer: MethodDefinition<_webrtc_CreateSDPRequest, _webrtc_CreateSDPResponse, _webrtc_CreateSDPRequest__Output, _webrtc_CreateSDPResponse__Output>
  CreatePeerConnection: MethodDefinition<_webrtc_CreatePeerConnectionRequest, _webrtc_Empty, _webrtc_CreatePeerConnectionRequest__Output, _webrtc_Empty__Output>
  CreateSession: MethodDefinition<_webrtc_CreateSessionRequest, _webrtc_CreateSessionResponse, _webrtc_CreateSessionRequest__Output, _webrtc_CreateSessionResponse__Output>
  GetStats: MethodDefinition<_webrtc_GetStatsRequest, _webrtc_GetStatsResponse, _webrtc_GetStatsRequest__Output, _webrtc_GetStatsResponse__Output>
  GetTransceivers: MethodDefinition<_webrtc_GetTransceiversRequest, _webrtc_GetTransceiversResponse, _webrtc_GetTransceiversRequest__Output, _webrtc_GetTransceiversResponse__Output>
  Observer: MethodDefinition<_webrtc_ObserverRequest, _webrtc_PeerConnectionObserverMessage, _webrtc_ObserverRequest__Output, _webrtc_PeerConnectionObserverMessage__Output>
  SetLocalDescription: MethodDefinition<_webrtc_SetSDPRequest, _webrtc_SetSDPResponse, _webrtc_SetSDPRequest__Output, _webrtc_SetSDPResponse__Output>
  SetRemoteDescription: MethodDefinition<_webrtc_SetSDPRequest, _webrtc_SetSDPResponse, _webrtc_SetSDPRequest__Output, _webrtc_SetSDPResponse__Output>
  StartSession: MethodDefinition<_webrtc_StartSessionRequest, _webrtc_Empty, _webrtc_StartSessionRequest__Output, _webrtc_Empty__Output>
  StopSession: MethodDefinition<_webrtc_StopSessionRequest, _webrtc_Empty, _webrtc_StopSessionRequest__Output, _webrtc_Empty__Output>
}