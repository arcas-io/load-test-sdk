// Original file: ../../rust/server/proto/webrtc.proto

import type { PeerConnectionStat as _webrtc_PeerConnectionStat, PeerConnectionStat__Output as _webrtc_PeerConnectionStat__Output } from '../webrtc/PeerConnectionStat';

export interface PeerConnectionStats {
  'id'?: (string);
  'name'?: (string);
  'videoSender'?: (_webrtc_PeerConnectionStat)[];
}

export interface PeerConnectionStats__Output {
  'id': (string);
  'name': (string);
  'videoSender': (_webrtc_PeerConnectionStat__Output)[];
}
