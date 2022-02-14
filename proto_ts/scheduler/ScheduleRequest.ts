// Original file: ../../rust/scheduler/proto/scheduler.proto

import type { ProviderRequest as _scheduler_ProviderRequest, ProviderRequest__Output as _scheduler_ProviderRequest__Output } from '../scheduler/ProviderRequest';

export interface ScheduleRequest {
  'companyId'?: (string);
  'sessionId'?: (string);
  'userId'?: (string);
  'providers'?: (_scheduler_ProviderRequest)[];
}

export interface ScheduleRequest__Output {
  'companyId': (string);
  'sessionId': (string);
  'userId': (string);
  'providers': (_scheduler_ProviderRequest__Output)[];
}
