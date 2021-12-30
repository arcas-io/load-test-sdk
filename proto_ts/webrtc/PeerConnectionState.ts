// Original file: ../../rust/server/proto/webrtc.proto


export interface PeerConnectionState {
  'numSending'?: (number);
  'numNotSending'?: (number);
  'numReceiving'?: (number);
  'numNotReceiving'?: (number);
}

export interface PeerConnectionState__Output {
  'numSending': (number);
  'numNotSending': (number);
  'numReceiving': (number);
  'numNotReceiving': (number);
}
