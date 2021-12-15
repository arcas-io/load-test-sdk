// Original file: ../../rust/server/proto/webrtc.proto

import type { PeerConnectionState as _webrtc_PeerConnectionState, PeerConnectionState__Output as _webrtc_PeerConnectionState__Output } from '../webrtc/PeerConnectionState';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface SessionStats {
  'id'?: (string);
  'name'?: (string);
  'numPeerConnections'?: (number | string | Long);
  'state'?: (string);
  'peerConnectionState'?: (_webrtc_PeerConnectionState | null);
  'startTime'?: (_google_protobuf_Timestamp | null);
  'stopTime'?: (_google_protobuf_Timestamp | null);
  'elapsedTime'?: (number | string | Long);
}

export interface SessionStats__Output {
  'id': (string);
  'name': (string);
  'numPeerConnections': (string);
  'state': (string);
  'peerConnectionState': (_webrtc_PeerConnectionState__Output | null);
  'startTime': (_google_protobuf_Timestamp__Output | null);
  'stopTime': (_google_protobuf_Timestamp__Output | null);
  'elapsedTime': (string);
}
