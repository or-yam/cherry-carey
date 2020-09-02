import { observable, action } from 'mobx';
import axios from 'axios';
export class User {
  @observable id = '';
  @observable name = '';
  @observable email = '';
  @observable img = '';
  @observable isSignin = false;

  @observable emailInput = 'a';
  @observable passwordInput = 'b';
  @observable nameInput = '';

  @action onInputChange(event) {
    this[event.target.name] = event.target.value;
  }

  @action userLogin() {
    axios
      .get(
        `http://localhost:4000/user/${this.emailInput}/${this.passwordInput}`
      )
      .then(
        (res) => {
          const { id, name, email, img } = res.data[0][0];
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
          this.isSignin = true;
          console.log(this.name);
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
          this.isSignin = true;
        },
        (error) => {
          this.name = 'error';
        }
      );
  }
}
