// Original file: ../../rust/scheduler/proto/scheduler.proto

import type { Providers as _scheduler_Providers } from '../scheduler/Providers';
import type { RegionRequest as _scheduler_RegionRequest, RegionRequest__Output as _scheduler_RegionRequest__Output } from '../scheduler/RegionRequest';

export interface ProviderRequest {
  'provider'?: (_scheduler_Providers | keyof typeof _scheduler_Providers);
  'regions'?: (_scheduler_RegionRequest)[];
}

export interface ProviderRequest__Output {
  'provider': (keyof typeof _scheduler_Providers);
  'regions': (_scheduler_RegionRequest__Output)[];
}
