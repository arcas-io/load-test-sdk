import { createSession } from '../src/session';

describe('createSession function', () => {
  it('creates a new session', async () => {
    const name = 'From Node SDK';
    const session = await createSession({ name });
    expect(session.id).toHaveLength(21);
    expect(session.name).toBe(name);
  });
});
