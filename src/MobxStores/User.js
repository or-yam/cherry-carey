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

  @observable isRememberMe = false;
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

  @action checkEmail(email) {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/userEmail/${email}`)
      .then((res) => res.data);
  }

  @action userLogin() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/user/${this.emailInput}/${this.passwordInput}`
      )
      .then(
        (res) => {
          const { id, name, email, img } = res.data;
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
          this.isSignin = true;
          this.isRememberMe && this.rememberMe();
          this.getLocation();
        },
        (error) => {
          this.errMsg = error.response.data;
        }
      );
  }

  @action userRegister() {
    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/user`, {
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
          this.isRememberMe && this.rememberMe();
          this.getLocation();
        },
        (error) => {
          error.response.data
            ? (this.errMsg = error.response.data)
            : (this.errMsg = 'something went wrong');
        }
      );
  }

  @action onRememberChange() {
    this.isRememberMe = !this.isRememberMe;
  }

  @action rememberMe() {
    const cherryUser = {
      id: this.id,
      name: this.name,
      email: this.email,
      img: this.img,
    };
    localStorage.setItem('cherryUser', JSON.stringify(cherryUser));
  }

  @action getUserFromLocalStorage() {
    let cherryUser = localStorage.getItem('cherryUser');
    if (cherryUser) {
      cherryUser = JSON.parse(cherryUser);
      this.id = cherryUser.id;
      this.name = cherryUser.name;
      this.email = cherryUser.email;
      this.img = cherryUser.img;
      this.isSignin = true;
    }
    return this.isSignin;
  }

  @action facebookRegister(email, name, img) {
    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/fbUser`, { email, name, img })
      .then(
        (res) => {
          const { id, name, email, img } = res.data;
          this.id = id;
          this.name = name;
          this.email = email;
          this.img = img;
          this.isSignin = true;
          this.isRememberMe && this.rememberMe();
          this.getLocation();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
