import { Client } from '../src/client';

const SERVERS = ['[::]:50051', '[::]:50051', '[::]:50051'];

describe('Client.nextClient function', () => {
  it('gets the next client', async () => {
    const client = new Client(SERVERS);
    const nextClient = client.nextClient();
    expect(nextClient).toHaveValue;
  });
});
