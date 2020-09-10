import { observable, action } from 'mobx';
import axios from 'axios';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage('en');

export class FormInputs {
  @observable postType = '';
  @observable mealOrigin = '';
  @observable allergies = '';
  @observable mealTime = '';
  @observable mealName = '';
  @observable date = '';
  @observable location = false;
  @observable locationLat = 32.734247;
  @observable locationLng = 35.540642;
  @observable adressInput = '';
  @observable kosher = true;
  @observable distribution = 'Be social - Eat together';
  @observable price = 30;
  @observable mealImage = '';

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };
  setDefaultPosition = () => {
    this.locationLat = 32.834247;
    this.locationLng = 35.640642;
  };

  showPosition = async (position) => {
    const postPosition = await position.coords;
    this.locationLat = postPosition.latitude;
    this.locationLng = postPosition.longitude;
  };

  @action setPositionByAdress() {
    Geocode.fromAddress(this.adressInput).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.locationLat = lat;
        this.locationLng = lng;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  @action clearInputs = () => {
    this.postType = '';
    this.mealOrigin = '';
    this.allergies = '';
    this.mealTime = '';
    this.mealName = '';
    this.date = '';
    this.location = false;
    this.locationLat = 32.734247;
    this.locationLng = 35.540642;
    this.adressInput = '';
    this.kosher = true;
    this.distribution = 'Be social - Eat together';
    this.price = 30;
    this.mealImage = '';
  };

  @action onInputChange(event) {
    this[event.currentTarget.name] = event.currentTarget.value;
  }

  @action onDateInputChange(event) {
    let inputDate = new Date(event);
    inputDate.setDate(inputDate.getDate() + 1);
    this.date = inputDate.toJSON().slice(0, 10).replace(/-/g, '/');
  }

  @action toggleValue(event) {
    this[event.currentTarget.name] = !this[event.currentTarget.name];
    this.getLocation();
    this.location ? this.getLocation() : this.setDefaultPosition();
  }

  @action sliderChange(event, val) {
    event.currentTarget.id !== 'distribution'
      ? (this[event.currentTarget.id] = val)
      : (this[event.currentTarget.id] =
          val === 0
            ? 'Delivery'
            : val === 30
            ? 'Be social - Eat together'
            : 'Take away');
  }

  @action async onImageChange(url) {
        // const file = event.target.files[0];
        // const data = new FormData();
        // data.append('file', file);
        // data.append('upload_preset', 'i4co6ysf');
    // setLoading(true);
      // axios
      //   .post('https://api.cloudinary.com/v1_1/dnrxmm7a0/image/upload', data)
      //   .then((res) => {
          this.mealImage = url;
      //   });
    // setLoading(false);
  }

  @action submitPost(event, userId) {
    this.postType = event.currentTarget.id;
    const postData = {
      userId: userId,
      postType: this.postType,
      mealOrigin: this.mealOrigin,
      mealName: this.mealName,
      mealDate: this.date,
      mealTime: this.mealTime,
      allergies: this.allergies,
      kosher: this.kosher,
      distribution: this.distribution,
      locationLat: this.locationLat,
      locationLng: this.locationLng,
      price: this.price,
      mealImage: this.mealImage,
    };
    return postData;
  }

  @action submitFilters() {
    return {
      mealOrigin: this.mealOrigin,
      mealTime: this.mealTime,
      mealDate: this.date,
    };
  }
}
