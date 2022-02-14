// Original file: ../../rust/scheduler/proto/scheduler.proto

import type { LoadserverEndpoint as _scheduler_LoadserverEndpoint, LoadserverEndpoint__Output as _scheduler_LoadserverEndpoint__Output } from '../scheduler/LoadserverEndpoint';

export interface RegionReply {
  'region'?: (string);
  'endpoints'?: (_scheduler_LoadserverEndpoint)[];
}

export interface RegionReply__Output {
  'region': (string);
  'endpoints': (_scheduler_LoadserverEndpoint__Output)[];
}
