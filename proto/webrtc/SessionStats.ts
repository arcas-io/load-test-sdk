// Original file: ../../rust/server/proto/webrtc.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface SessionStats {
  'id'?: (string);
  'name'?: (string);
  'numPeerConnections'?: (number | string | Long);
  'state'?: (string);
  'startTime'?: (_google_protobuf_Timestamp | null);
  'stopTime'?: (_google_protobuf_Timestamp | null);
  'elapsedTime'?: (number | string | Long);
}

export interface SessionStats__Output {
  'id': (string);
  'name': (string);
  'numPeerConnections': (string);
  'state': (string);
  'startTime': (_google_protobuf_Timestamp__Output | null);
  'stopTime': (_google_protobuf_Timestamp__Output | null);
  'elapsedTime': (string);
}
