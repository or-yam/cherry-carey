import { observable } from 'mobx';

export class User {
  @observable id;
  @observable name;
  @observable email;
  @observable img;
  constructor(id, name, email, img) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.img = img;
  }
}
