import { observable, action } from 'mobx';

export class Post {
  @observable id = null;
  @observable postType = '';
  @observable mealOrigin = '';
  @observable allergies = '';
  @observable mealTime = '';
  @observable mealName = '';
  @observable date = '';
  @observable locationLat = '';
  @observable locationLng = '';
  @observable kosher = true;
  @observable distribution = '';
  @observable price = '';
  @observable mapWindow = false;

  constructor(data) {
    this.id = data.id;
    this.postType = data.postType;
    this.mealOrigin = data.mealOrigin;
    this.allergies = data.allergies;
    this.mealTime = data.mealTime;
    this.mealName = data.mealName;
    this.date = data.date;
    this.locationLat = data.locationLat;
    this.locationLng = data.locationLng;
    this.kosher = data.kosher;
    this.distribution = data.distribution;
    this.price = data.price;
  }

  @action mapWindowToggle() {
    this.mapWindow = !this.mapWindow;
  }
}
