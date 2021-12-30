// Original file: ../../rust/server/proto/webrtc.proto

import type { SDPType as _webrtc_SDPType } from '../webrtc/SDPType';

export interface SetSDPRequest {
  'sessionId'?: (string);
  'peerConnectionId'?: (string);
  'sdp'?: (string);
  'sdpType'?: (_webrtc_SDPType | keyof typeof _webrtc_SDPType);
}

export interface SetSDPRequest__Output {
  'sessionId': (string);
  'peerConnectionId': (string);
  'sdp': (string);
  'sdpType': (keyof typeof _webrtc_SDPType);
}
