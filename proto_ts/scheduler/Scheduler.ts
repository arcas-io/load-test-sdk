// Original file: ../../rust/scheduler/proto/scheduler.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ScheduleReply as _scheduler_ScheduleReply, ScheduleReply__Output as _scheduler_ScheduleReply__Output } from '../scheduler/ScheduleReply';
import type { ScheduleRequest as _scheduler_ScheduleRequest, ScheduleRequest__Output as _scheduler_ScheduleRequest__Output } from '../scheduler/ScheduleRequest';

export interface SchedulerClient extends grpc.Client {
  Schedule(argument: _scheduler_ScheduleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  Schedule(argument: _scheduler_ScheduleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  Schedule(argument: _scheduler_ScheduleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  Schedule(argument: _scheduler_ScheduleRequest, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  schedule(argument: _scheduler_ScheduleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  schedule(argument: _scheduler_ScheduleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  schedule(argument: _scheduler_ScheduleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  schedule(argument: _scheduler_ScheduleRequest, callback: (error?: grpc.ServiceError, result?: _scheduler_ScheduleReply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface SchedulerHandlers extends grpc.UntypedServiceImplementation {
  Schedule: grpc.handleUnaryCall<_scheduler_ScheduleRequest__Output, _scheduler_ScheduleReply>;
  
}

export interface SchedulerDefinition extends grpc.ServiceDefinition {
  Schedule: MethodDefinition<_scheduler_ScheduleRequest, _scheduler_ScheduleReply, _scheduler_ScheduleRequest__Output, _scheduler_ScheduleReply__Output>
}
