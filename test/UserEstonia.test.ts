import { UserEstonia } from '../src/UserEstonia';

describe('UserEstonia', () => {
  it('should create a UserEstonia instance with undefined Mobile ID authorization', () => {
    const user = new UserEstonia('Elisabeth', 'Swan', '123456789', 'Tallinn');
    expect(user.mobileIDAuthorization).toBeUndefined();
  });
});