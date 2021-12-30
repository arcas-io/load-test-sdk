// Original file: ../../rust/server/proto/webrtc.proto

import type { TransceiverDirection as _webrtc_TransceiverDirection } from '../webrtc/TransceiverDirection';
import type { MediaType as _webrtc_MediaType } from '../webrtc/MediaType';

export interface Transceiver {
  'id'?: (string);
  'mid'?: (string);
  'direction'?: (_webrtc_TransceiverDirection | keyof typeof _webrtc_TransceiverDirection);
  'mediaType'?: (_webrtc_MediaType | keyof typeof _webrtc_MediaType);
}

export interface Transceiver__Output {
  'id': (string);
  'mid': (string);
  'direction': (keyof typeof _webrtc_TransceiverDirection);
  'mediaType': (keyof typeof _webrtc_MediaType);
}
