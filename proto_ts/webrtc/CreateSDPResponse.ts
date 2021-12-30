// Original file: ../../rust/server/proto/webrtc.proto

import type { SDPType as _webrtc_SDPType } from '../webrtc/SDPType';

export interface CreateSDPResponse {
  'sessionId'?: (string);
  'peerConnectionId'?: (string);
  'sdp'?: (string);
  'sdpType'?: (_webrtc_SDPType | keyof typeof _webrtc_SDPType);
}

export interface CreateSDPResponse__Output {
  'sessionId': (string);
  'peerConnectionId': (string);
  'sdp': (string);
  'sdpType': (keyof typeof _webrtc_SDPType);
}
