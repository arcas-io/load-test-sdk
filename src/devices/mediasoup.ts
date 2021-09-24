import { Device, DeviceOptions } from 'mediasoup-client';

export class MediaSoup {
  device: Device;

  constructor() {
    this.device = new Device();
  }

  deviceOptions() {
    const options = new DeviceOptions();
  }
}
