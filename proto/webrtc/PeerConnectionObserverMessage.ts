// Original file: ../../rust/server/proto/webrtc.proto

import type { IceCandidate as _webrtc_IceCandidate, IceCandidate__Output as _webrtc_IceCandidate__Output } from '../webrtc/IceCandidate';
import type { VideoTransceiver as _webrtc_VideoTransceiver, VideoTransceiver__Output as _webrtc_VideoTransceiver__Output } from '../webrtc/VideoTransceiver';

export interface PeerConnectionObserverMessage {
  'iceCandidate'?: (_webrtc_IceCandidate | null);
  'videoTransceiver'?: (_webrtc_VideoTransceiver | null);
  'event'?: "iceCandidate"|"videoTransceiver";
}

export interface PeerConnectionObserverMessage__Output {
  'iceCandidate'?: (_webrtc_IceCandidate__Output | null);
  'videoTransceiver'?: (_webrtc_VideoTransceiver__Output | null);
  'event': "iceCandidate"|"videoTransceiver";
}
