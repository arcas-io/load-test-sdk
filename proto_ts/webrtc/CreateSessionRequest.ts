// Original file: ../../rust/server/proto/webrtc.proto

import type { LogLevel as _webrtc_LogLevel } from '../webrtc/LogLevel';
import type { Long } from '@grpc/proto-loader';

export interface CreateSessionRequest {
  'sessionId'?: (string);
  'name'?: (string);
  'pollingStateS'?: (number | string | Long);
  'logLevel'?: (_webrtc_LogLevel | keyof typeof _webrtc_LogLevel);
}

export interface CreateSessionRequest__Output {
  'sessionId': (string);
  'name': (string);
  'pollingStateS': (string);
  'logLevel': (keyof typeof _webrtc_LogLevel);
}
