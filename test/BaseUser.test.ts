import { BaseUser } from '../src/BaseUser';

describe('BaseUser', () => {
  it('should create a BaseUser instance with correct properties', () => {
    const user = new BaseUser('Elisabeth', 'Swan', '123456789', 'Tallinn');
    expect(user.name).toBe('Elisabeth');
    expect(user.surname).toBe('Swan');
    expect(user.phone).toBe('123456789');
    expect(user.address).toBe('Tallinn');
  });
});
