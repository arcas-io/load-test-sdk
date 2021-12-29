import { Client } from '../src/client';

const PROTO_PATH = './../../rust/server/proto/webrtc.proto';
const SERVERS = ['[::]:50051', '[::]:50051', '[::]:50051'];

describe('Client.nextClient function', () => {
  it('gets the next client', async () => {
    const client = new Client(SERVERS, PROTO_PATH);
    const nextClient = client.nextClient();
    expect(nextClient).toBe(client.clients[0]);
  });
});
