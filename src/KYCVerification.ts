import { UserEstonia } from './UserEstonia';
import { UserLatvia } from './UserLatvia';

export class KYCVerification {
  activateMobileIDForEstonia(user: UserEstonia, age: number): void {
    if (age < 16) {
      throw new Error('User must be at least 16 years old to activate Mobile ID');
    }
    user.mobileIDAuthorization = true;
  }

  activateEParakstsForLatvia(user: UserLatvia, age: number): void {
    if (age < 18) {
      throw new Error('User must be at least 18 years old to activate eParaksts');
    }
    user.activateEParakstsForLatvia = true;
  }
}
