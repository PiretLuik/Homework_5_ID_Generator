import { UserEstonia } from './UserEstonia';
import { UserLatvia } from './UserLatvia';

export class Contract {
  public signed: boolean = false;

  constructor(public title: string) {}

  sign(user: UserEstonia | UserLatvia): void {
    if (
      (user instanceof UserEstonia && user.mobileIDAuthorization) ||
      (user instanceof UserLatvia && user.activateEParakstsForLatvia)
    ) {
      this.signed = true;
    } else {
      throw new Error('User authorization is not active, contract cannot be signed');
    }
  }
}
