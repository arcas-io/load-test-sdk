// Base API
export { Session } from './session';

export function setupArcasEnvironment() {
  // detect the right kind of global object
  global.RTCPeerConnection = ArcasRTCPeerConnection;
}
