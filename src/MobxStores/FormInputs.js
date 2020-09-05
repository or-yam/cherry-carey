import { observable, action } from 'mobx';

export class FormInputs {
  @observable postType = '';
  @observable mealOrigin = '';
  @observable allergies = '';
  @observable mealTime = '';
  @observable mealName = '';
  @observable date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  @observable location = true;
  @observable locationLat = 32.734247;
  @observable locationLng = 35.540642;
  @observable kosher = true;
  @observable distribution = 'Be social - Eat together';
  @observable price = 30;

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

  @action clearInputs = () => {
    this.postType = '';
    this.mealOrigin = '';
    this.allergies = '';
    this.mealTime = '';
    this.mealName = '';
    this.date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    this.location = true;
    this.locationLat = 32.734247;
    this.locationLng = 35.540642;
    this.kosher = true;
    this.distribution = 'Be social - Eat together';
    this.price = 30;
  };

  @action onInputChange(event) {
    this[event.currentTarget.name] = event.currentTarget.value;
  }

  @action onDateInputChange(event) {
    this.date = new Date(event).toJSON().slice(0, 10).replace(/-/g, '/');
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
    };
    return postData;
  }
}
