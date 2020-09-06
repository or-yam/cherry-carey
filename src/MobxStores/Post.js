import { observable, action } from 'mobx';
import axios from 'axios';
export class Post {
  @observable id = null;
  @observable generatedBy = null;
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
    this.generatedBy = this.getGeneratedBy(data.generatedBy_id);
    this.postType = data.postType;
    this.mealOrigin = data.mealOrigin;
    this.allergies = data.allergies;
    this.mealTime = data.mealTime;
    this.mealName = data.mealName;
    this.date = data.mealDate;
    this.locationLat = data.locationLat;
    this.locationLng = data.locationLng;
    this.kosher = data.kosher;
    this.distribution = data.distribution;
    this.price = data.price;
  }

  @action async getGeneratedBy(generatedBy_id) {
    await axios.get(`http://localhost:4000/user/${generatedBy_id}`).then(
      (res) => {
        this.generatedBy = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  @action mapWindowToggle() {
    this.mapWindow = !this.mapWindow;
  }
}
