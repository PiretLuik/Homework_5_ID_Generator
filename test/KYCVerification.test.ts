import { UserEstonia } from '../src/UserEstonia';
import { UserLatvia } from '../src/UserLatvia';
import { KYCVerification } from '../src/KYCVerification';

describe('KYCVerification', () => {
  let kyc: KYCVerification;
  let estoniaUser: UserEstonia;
  let latviaUser: UserLatvia;

  beforeEach(() => {
    kyc = new KYCVerification();
    estoniaUser = new UserEstonia('Elisabeth', 'Swan', '123456789', 'Tallinn');
    latviaUser = new UserLatvia('Eduard', 'Swan', '987654321', 'Riga');
  });

  it('should activate Mobile ID for Estonia if age is 16 or older', () => {
    kyc.activateMobileIDForEstonia(estoniaUser, 16);
    expect(estoniaUser.mobileIDAuthorization).toBe(true);
  });

  it('should throw an error if age is less than 16 for Mobile ID', () => {
    expect(() => kyc.activateMobileIDForEstonia(estoniaUser, 15)).toThrow(
      'User must be at least 16 years old to activate Mobile ID'
    );
  });

  it('should activate eParaksts for Latvia if age is 18 or older', () => {
    kyc.activateEParakstsForLatvia(latviaUser, 18);
    expect(latviaUser.activateEParakstsForLatvia).toBe(true);
  });

  it('should throw an error if age is less than 18 for eParaksts', () => {
    expect(() => kyc.activateEParakstsForLatvia(latviaUser, 17)).toThrow(
      'User must be at least 18 years old to activate eParaksts'
    );
  });
});
