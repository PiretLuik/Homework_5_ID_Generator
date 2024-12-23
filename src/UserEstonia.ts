import { BaseUser } from './BaseUser';

export class UserEstonia extends BaseUser {
  public mobileIDAuthorization: boolean | undefined = undefined;

  constructor(name: string, surname: string, phone: string, address: string) {
    super(name, surname, phone, address);
  }
}
