import { observable, action } from 'mobx';
import axios from 'axios';
export class User {
  @observable id = '';
  @observable name = '';
  @observable email = '';
  @observable img = '';
  @observable isSignin = false;
  @observable errMsg = '';
  @observable lat = 32.734247;
  @observable lng = 35.540642;
  @observable mapWindow = false;

  @observable emailInput = '';
  @observable passwordInput = '';
  @observable nameInput = '';

  @action onInputChange(event) {
    this[event.target.name] = event.target.value;
  }

  @action mapWindowToggle() {
    this.mapWindow = !this.mapWindow;
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };
  setDefaultPosition = () => {
    this.lat = 32.834247;
    this.lng = 35.640642;
  };

  showPosition = async (position) => {
    const postPosition = await position.coords;
    this.lat = postPosition.latitude;
    this.lng = postPosition.longitude;
  };

  @action userLogin() {
    axios
      .get(
        `http://localhost:4000/user/${this.emailInput}/${this.passwordInput}`
      )
      .then(
        (res) => {
          const { id, name, email, img } = res.data;
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
          this.isSignin = true;
        },
        (error) => {
          this.errMsg = error.response.data;
        }
      );
    this.getLocation();
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
          const { id, name, email, img } = res.data[0][0];
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
          this.isSignin = true;
        },
        (error) => {
          error.response.data
            ? (this.errMsg = error.response.data)
            : (this.errMsg = 'something went wrong');
        }
      );
    this.getLocation();
  }
}
