import { observable, action, computed } from 'mobx';

export class Post {
  @observable postType = '';
  @observable mealOrigin = '';
  @observable allergies = '';
  @observable mealTime = '';
  @observable mealName = '';
  @observable date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  @observable location = this.getLocation();
  @observable locationLat = '';
  @observable locationLan = '';
  @observable kosher = '';
  @observable distribution = 'Be social - Eat together';
  @observable price = '';

  @action getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  @action showPosition(position) {
    this.locationLat = position.coords.latitude;
    this.locationLan = position.coords.longitude;
  }

  @action onInputChange(event) {
    console.log(event.target.name);
    // this[event.target.name] = event.target.value;
    // console.log(this[event.target.name]);
  }
}
