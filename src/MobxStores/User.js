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
  @observable passwordInput = '-';
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

  @action clearErrMsg() {
    this.errMsg = '';
  }

  @action checkEmail(email) {
    axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/userEmail/${email}`)
      .then((res) => res.data);
  }

  @action userLogin() {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/user/${this.emailInput}/${this.passwordInput}`
      )
      .then(
        (res) => {
          const token = res.data;
          axios
            .get(`${process.env.REACT_APP_SERVER_PORT}/userByToken`, {
              headers: {
                authorization: token,
              },
            })
            .then(
              (user) => {
                const { id, name, email, img } = user.data;
                this.id = id;
                this.name = name;
                this.email = email;
                this.img = img;
                this.isSignin = true;
                this.isRememberMe && this.rememberMe(token);
                this.getLocation();
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          error.response.status === 404
            ? (this.errMsg = `Didn't Find This Email Adress`)
            : error.response.status === 401
            ? (this.errMsg = `Please Check Your Password`)
            : (this.errMsg = `Something Went Wrong`);
        }
      );
  }

  @action userRegister() {
    if (!this.emailInput || !this.nameInput || !this.passwordInput) {
      alert('You must fill all fields');
    }
    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/user`, {
        name: this.nameInput,
        email: this.emailInput,
        password: this.passwordInput,
      })
      .then(
        (res) => {
          const token = res.data;
          axios
            .get(`${process.env.REACT_APP_SERVER_PORT}/userByToken`, {
              headers: {
                authorization: token,
              },
            })
            .then(
              (user) => {
                const { id, name, email, img } = user.data[0][0];
                this.id = id;
                this.name = name;
                this.email = email;
                this.img = img;
                this.isSignin = true;
                this.isRememberMe && this.rememberMe(token);
                this.getLocation();
              },
              (error) => {
                console.log(error);
              }
            );
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

  @action rememberMe(token) {
    const cherryUser = {
      token,
    };
    localStorage.setItem('cherryUser', JSON.stringify(cherryUser));
  }

  @action getUserFromLocalStorage() {
    let cherryUser = localStorage.getItem('cherryUser');
    if (cherryUser) {
      cherryUser = JSON.parse(cherryUser);
      const token = cherryUser.token;
      axios
        .get(`${process.env.REACT_APP_SERVER_PORT}/userByToken`, {
          headers: {
            authorization: token,
          },
        })
        .then(
          (user) => {
            const { id, name, email, img } = user.data;
            this.id = id;
            this.name = name;
            this.email = email;
            this.img = img;
            this.isSignin = true;
            this.isRememberMe && this.rememberMe(token);
            this.getLocation();
          },
          (error) => {
            console.log(error);
          }
        );
    }
    return this.isSignin;
  }

  @action facebookRegister(email, name, img) {
    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/fbUser`, { email, name, img })
      .then(
        (res) => {
          const token = res.data;
          axios
            .get(`${process.env.REACT_APP_SERVER_PORT}/userByToken`, {
              headers: {
                authorization: token,
              },
            })
            .then(
              (user) => {
                const { id, name, email, img } = user.data;
                this.id = id;
                this.name = name;
                this.email = email;
                this.img = img;
                this.isSignin = true;
                this.isRememberMe && this.rememberMe(token);
                this.getLocation();
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
