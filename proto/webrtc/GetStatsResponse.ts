// Original file: ../../rust/server/proto/webrtc.proto

import type { SessionStats as _webrtc_SessionStats, SessionStats__Output as _webrtc_SessionStats__Output } from '../webrtc/SessionStats';
import type { PeerConnectionStats as _webrtc_PeerConnectionStats, PeerConnectionStats__Output as _webrtc_PeerConnectionStats__Output } from '../webrtc/PeerConnectionStats';

export interface GetStatsResponse {
  'session'?: (_webrtc_SessionStats | null);
  'peerConnections'?: (_webrtc_PeerConnectionStats)[];
}

export interface GetStatsResponse__Output {
  'session': (_webrtc_SessionStats__Output | null);
  'peerConnections': (_webrtc_PeerConnectionStats__Output)[];
}
