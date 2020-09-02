import { observable, action } from 'mobx';
import axios from 'axios';
export class User {
  @observable id;
  @observable name;
  @observable email;
  @observable img;

  @observable emailInput = '';
  @observable passwordInput = '';
  @observable nameInput = '';

  @action onInputChange(event) {
    this[event.target.name] = event.target.value.toLowerCase();
  }

  @action userLogin() {
    axios
      .get(
        `http://localhost:4000/user/${this.emailInput}/${this.passwordInput}`
      )
      .then(
        (res) => {
          const { id, name, email, img } = res.data[0];
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
        },
        (error) => {
          this.name = 'error';
        }
      );
  }

  @action userRegister() {
    axios
      .post(`http://localhost:4000/user`, {
        name: this.nameInput,
        email: this.emailInput,
        password: this.passwordInput,
      })
      .then(
        (res) => {
          const { id, name, email, img } = res.data[0];
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
        },
        (error) => {
          this.name = 'error';
        }
      );
  }
}
