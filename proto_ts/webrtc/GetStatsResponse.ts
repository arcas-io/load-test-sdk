// Original file: ../../rust/server/proto/webrtc.proto

import type { SessionStats as _webrtc_SessionStats, SessionStats__Output as _webrtc_SessionStats__Output } from '../webrtc/SessionStats';

export interface GetStatsResponse {
  'session'?: (_webrtc_SessionStats | null);
}

export interface GetStatsResponse__Output {
  'session': (_webrtc_SessionStats__Output | null);
}
