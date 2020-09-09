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

  @action checkEmail(email) {
    axios.get(`http://localhost:4000/user/${email}`).then((res) => res.data);
  }

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
          localStorage.stayLoggedIn = 'LoggedIn'
          localStorage.id = id;
          localStorage.name = name;
          localStorage.email = email;
          localStorage.img = img;
        },
        (error) => {
          this.errMsg = error.response.data;
        }
      );
    this.getLocation();
    window.location.reload();
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
          localStorage.stayLoggedIn = 'LoggedIn'
          localStorage.id = id;
          localStorage.name = name;
          localStorage.email = email;
          localStorage.img = img;
        },
        (error) => {
          error.response.data
            ? (this.errMsg = error.response.data)
            : (this.errMsg = 'something went wrong');
        }
      );
    this.getLocation();
  }


  @action stayLoggedIn() {
    this.id = localStorage.id;
    this.name = localStorage.name;
    this.email = localStorage.email;
    this.img = localStorage.img;
    this.isSignin = true;
    this.getLocation();

  @action facebookRegister(email, name, img) {
    axios.post(`http://localhost:4000/fbUser`, { email, name, img }).then(
      (res) => {
        const { id, name, email, img } = res.data;
        this.id = id;
        this.name = name;
        this.email = email;
        this.img = img;
        this.isSignin = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
