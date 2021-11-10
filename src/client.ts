import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './../proto/webrtc';
import { WebRtcClient } from './../proto/webrtc/WebRtc';

export class Client {
  public clients: { [key: number]: WebRtcClient } = {};
  private current: number = 0;

  constructor(private servers: string[]) {
    this.initClients();
  }

  initClients() {
    this.servers.forEach((server, index) => {
      this.clients[index] = this.newClient(server);
    });
  }

  nextClient(): WebRtcClient {
    const client = this.clients[this.current];
    this.current = ++this.current % this.servers.length;
    return client;
  }

  /**
   * Returns a gPRC client
   * @returns {WebRtcClient}
   * @todo make protoPath an env var
   */
  newClient(server: string): WebRtcClient {
    const protoPath = './../../rust/server/proto/webrtc.proto';
    const packageDefinition = protoLoader.loadSync(protoPath, {
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
