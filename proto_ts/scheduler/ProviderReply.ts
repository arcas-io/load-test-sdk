// Original file: ../../rust/scheduler/proto/scheduler.proto

import type { Providers as _scheduler_Providers } from '../scheduler/Providers';
import type { RegionReply as _scheduler_RegionReply, RegionReply__Output as _scheduler_RegionReply__Output } from '../scheduler/RegionReply';

export interface ProviderReply {
  'provider'?: (_scheduler_Providers | keyof typeof _scheduler_Providers);
  'regions'?: (_scheduler_RegionReply)[];
}

export interface ProviderReply__Output {
  'provider': (keyof typeof _scheduler_Providers);
  'regions': (_scheduler_RegionReply__Output)[];
}
