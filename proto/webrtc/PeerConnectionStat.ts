// Original file: ../../rust/server/proto/webrtc.proto

import type { Long } from '@grpc/proto-loader';

export interface PeerConnectionStat {
  'ssrc'?: (number);
  'packetsSent'?: (number);
  'bytesSent'?: (number | string | Long);
  'framesEncoded'?: (number);
  'keyFramesEncoded'?: (number);
  'totalEncodeTime'?: (number | string);
  'frameWidth'?: (number);
  'frameHeight'?: (number);
  'retransmittedPacketsSent'?: (number | string | Long);
  'retransmittedBytesSent'?: (number | string | Long);
  'totalPacketSendDelay'?: (number | string);
  'nackCount'?: (number);
  'firCount'?: (number);
  'pliCount'?: (number);
  'qualityLimitationReason'?: (number);
  'qualityLimitationResolutionChanges'?: (number);
  'remotePacketsLost'?: (number);
  'remoteJitter'?: (number | string);
  'remoteRoundTripTime'?: (number | string);
}

export interface PeerConnectionStat__Output {
  'ssrc': (number);
  'packetsSent': (number);
  'bytesSent': (string);
  'framesEncoded': (number);
  'keyFramesEncoded': (number);
  'totalEncodeTime': (number);
  'frameWidth': (number);
  'frameHeight': (number);
  'retransmittedPacketsSent': (string);
  'retransmittedBytesSent': (string);
  'totalPacketSendDelay': (number);
  'nackCount': (number);
  'firCount': (number);
  'pliCount': (number);
  'qualityLimitationReason': (number);
  'qualityLimitationResolutionChanges': (number);
  'remotePacketsLost': (number);
  'remoteJitter': (number);
  'remoteRoundTripTime': (number);
}
