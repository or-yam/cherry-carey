import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class Posts {
  @observable foodPosts = [];
  @observable filteredPosts = [];
  @observable loadingState = 'pending';

  @action getFoodPosts() {
    this.foodPosts = [];
    this.loadingState = 'pending';
    axios.get('http://localhost:4000/foodPost').then(
      (res) => {
        this.foodPosts = res.data[0];
        this.filteredPosts = this.foodPosts;
        this.loadingState = 'done';
      },
      (error) => {
        this.loadingState = 'error';
      }
    );
  }

  @computed get numOfPosts() {
    return this.foodPosts.length;
  }

  @action filterEatPosts() {
    this.filteredPosts = this.foodPosts;
    this.filterCookPosts = this.foodPosts.filter(
      (post) => post.postType === 'eat'
    );
  }

  @action filterCookPosts() {
    this.filteredPosts = this.foodPosts;
    this.filteredPosts = this.foodPosts.filter(
      (post) => post.postType === 'cook'
    );
  }
}
