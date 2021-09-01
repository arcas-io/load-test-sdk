import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './../proto/webrtc';
import { WebRtcClient } from './../proto/webrtc/WebRtc';

/**
 * Returns a gPRC client singleton
 * @returns {WebRtcClient}
 * @todo make protoPath and server env vars
 */
function getClient(): WebRtcClient {
  const protoPath = './../../rust/server/proto/webrtc.proto';
  const server = '[::]:50051';
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

export const client = getClient();
