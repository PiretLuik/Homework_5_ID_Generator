import { BaseUser } from './BaseUser';

export class UserLatvia extends BaseUser {
  public activateEParakstsForLatvia: boolean | undefined = undefined;

  constructor(name: string, surname: string, phone: string, address: string) {
    super(name, surname, phone, address);
  }
}
