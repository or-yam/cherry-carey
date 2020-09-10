import { observable, action, computed } from 'mobx';
import axios from 'axios';
import { Post } from './Post';
export class Posts {
  @observable foodPosts = [];
  @observable filteredPosts = this.foodPosts;
  @observable loadingState = 'pending';

  @action getFoodPosts() {
    this.foodPosts = [];
    this.loadingState = 'pending';
    axios.get('/foodPost').then(
      (res) => {
        this.foodPosts = res.data[0].map((post) => new Post(post));
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

  @action filterByType(event) {
    this.filteredPosts = this.foodPosts.filter(
      (post) => post.postType === event.currentTarget.id
    );
  }

  @action filterByValues(filters) {
    this.filteredPosts = this.foodPosts.filter(
      (post) =>
        (post.mealOrigin === filters.mealOrigin || filters.mealOrigin === '') &&
        (post.mealTime === filters.mealTime || filters.mealTime === '') &&
        (post.date === filters.mealDate || filters.mealDate === '')
    );
  }

  @action addPost(postData) {
    axios.post('/foodPost', postData).then(
      (res) => {
        this.foodPosts.push(new Post(res.data));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
