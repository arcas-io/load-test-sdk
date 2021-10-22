import { Session } from './session';

// Reusable callbacks to apply to different clients
export class Callbacks {
  constructor(public session: Session) {}

  cbCreateOffer = async (_options: any, peer_connection_id: string) => {
    try {
      return await this.session.createOffer({
        peer_connection_id,
      });
    } catch (e) {
      console.error('cbCreateOffer error: ', e.details);
      throw e;
    }
  };

  cbCreateAnswer = async (_options: any, peer_connection_id: string) => {
    try {
      return await this.session.createAnswer({
        peer_connection_id,
      });
    } catch (e) {
      console.error('cbCreateAnswer error: ', e.details);
      throw e;
    }
  };

  cbSetLocalDescription = async (sdp, peer_connection_id: string) => {
    try {
      const options = {
        peer_connection_id,
        sdp: sdp.sdp,
        sdp_type: sdp.type,
      };
      await this.session.setLocalDescription(options);
    } catch (e) {
      console.error('cbSetLocalDescription error: ', e.details);
      throw e;
    }
  };

  cbSetRemoteDescription = async (sdp, peer_connection_id: string) => {
    try {
      const options = {
        peer_connection_id,
        sdp: sdp.sdp,
        sdp_type: sdp.type,
      };
      await this.session.setRemoteDescription(options);
    } catch (e) {
      console.error('cbSetRemoteDescription error: ', e.details);
      throw e;
    }
  };

  cbAddTrack = async (options: any, peer_connection_id: string) => {
    try {
      return await this.session.addTrack({
        peer_connection_id,
        ...options,
      });
    } catch (e) {
      console.error('cbAddTrack error: ', e.details);
      throw e;
    }
  };

  cbAddTransceiver = async (options: any, peer_connection_id: string) => {
    try {
      return await this.session.addTransceiver({
        peer_connection_id,
        ...options,
      });
    } catch (e) {
      console.error('cbAddTransceiver error: ', e.details);
      throw e;
    }
  };
}
