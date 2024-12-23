import { UserLatvia } from '../src/UserLatvia';

describe('UserLatvia', () => {
  it('should create a UserLatvia instance with undefined eParaksts authorization', () => {
    const user = new UserLatvia('Jane', 'Doe', '987654321', 'Riga');
    expect(user.activateEParakstsForLatvia).toBeUndefined();
  });
});
