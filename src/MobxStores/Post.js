import { observable, action } from 'mobx';

import axios from 'axios';
export class Post {
  @observable postType = '';
  @observable mealOrigin = '';
  @observable allergies = '';
  @observable mealTime = '';
  @observable mealName = '';
  @observable date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  @observable location = true;
  @observable locationLat = '';
  @observable locationLng = '';
  @observable kosher = true;
  @observable distribution = 'Be social - Eat together';
  @observable price = '';

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  showPosition = async (position) => {
    const postPosition = await position.coords;
    this.locationLat = postPosition.latitude;
    this.locationLng = postPosition.longitude;
  };

  setDefaultPosition = () => {
    this.locationLat = 32.834247;
    this.locationLng = 35.640642;
  };

  @action onInputChange(event) {
    this[event.target.name] = event.target.value;
  }

  @action onDateInputChange(event) {
    this.date = new Date(event).toJSON().slice(0, 10).replace(/-/g, '/');
  }

  @action toggleValue(event) {
    this[event.target.name] = !this[event.target.name];
    this.getLocation();
    this.location ? this.getLocation() : this.setDefaultPosition();
  }

  @action sliderChange(event, val) {
    event.target.id !== 'distribution'
      ? (this[event.target.id] = val)
      : (this[event.target.id] =
          val === 0
            ? 'Delivery'
            : val === 30
            ? 'Be social - Eat together'
            : 'Take away');
  }

  @action submitPost(event, userId) {
    this.postType = event.target.id
      ? event.target.id
      : event.target.closest('button').id;
    const postData = {
      userId: userId,
      postType: this.postType,
      mealOrigin: this.mealOrigin,
      mealName: this.mealName,
      date: this.date,
      mealTime: this.mealTime,
      allergies: this.allergies,
      kosher: this.kosher,
      distribution: this.distribution,
      locationLat: this.locationLat,
      locationLng: this.locationLng,
      //   price: this.price,
    };
    axios.post('http://localhost:4000/foodPost', postData).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
