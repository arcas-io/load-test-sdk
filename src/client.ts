import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './../proto_ts/webrtc';
import { WebRtcClient } from './../proto_ts/webrtc/WebRtc';

export class Client {
  public clients: { [key: number]: WebRtcClient } = {};
  private current = 0;

  constructor(private servers: string[], private protoPath: string) {
    this.initClients();
  }

  initClients() {
    this.servers.forEach((server, index) => {
      this.clients[index] = this.newClient(server);
    });
  }

  nextClient(): WebRtcClient {
    const client = this.clients[this.current];
    // console.log(`current ${this.current}`);
    this.current = ++this.current % this.servers.length;
    return client;
  }

  /**
   * Returns a gPRC client
   * @returns {WebRtcClient}
   * @todo make protoPath an env var
   */
  newClient(server: string): WebRtcClient {
    /* eslint-disable */
    const protoFile =
      require('path').resolve(__dirname, './../') + '/proto/webrtc.proto';
    const packageDefinition = protoLoader.loadSync(protoFile, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;

    return new proto.webrtc.WebRtc(server, grpc.credentials.createInsecure());
  }
}
