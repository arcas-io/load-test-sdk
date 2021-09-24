import { MediaSoup } from './devices/mediasoup';

type Kind = 'mediasoup' | 'twilio';

export class Device {
  constructor(private kind: Kind) {}
}
