import { createSession } from '../src/session';

describe('createSession function', () => {
  it('creates a new session', async () => {
    const session = await createSession('From Node SDK');
    expect(session.id).toHaveLength(21);
  });
});
