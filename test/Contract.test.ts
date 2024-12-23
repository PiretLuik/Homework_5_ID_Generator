import { Contract } from '../src/Contract';
import { UserEstonia } from '../src/UserEstonia';
import { UserLatvia } from '../src/UserLatvia';

describe('Contract', () => {
  let contract: Contract;
  let estoniaUser: UserEstonia;
  let latviaUser: UserLatvia;

  beforeEach(() => {
    contract = new Contract('Employment Agreement');
    estoniaUser = new UserEstonia('John', 'Doe', '123456789', 'Tallinn');
    latviaUser = new UserLatvia('Jane', 'Doe', '987654321', 'Riga');
  });

  it('should not sign the contract if authorization is not active', () => {
    expect(() => contract.sign(estoniaUser)).toThrow(
      'User authorization is not active, contract cannot be signed'
    );
    expect(contract.signed).toBe(false);
  });

  it('should sign the contract if Mobile ID is active for Estonia', () => {
    estoniaUser.mobileIDAuthorization = true;
    contract.sign(estoniaUser);
    expect(contract.signed).toBe(true);
  });

  it('should sign the contract if eParaksts is active for Latvia', () => {
    latviaUser.activateEParakstsForLatvia = true;
    contract.sign(latviaUser);
    expect(contract.signed).toBe(true);
  });
});
