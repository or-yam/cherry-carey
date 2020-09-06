import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import Login from './components/LogIn';
import Register from './components/Register';
import FoodPost from './components/FoodPost';
import FoodMap from './components/FoodMap';
import Map from './components/Map';
import MoreInfo from './components/MoreInfo'

import './App.css';

import { User } from './MobxStores/User';
import { Posts } from './MobxStores/Posts';
import { Post } from './MobxStores/Post';

const user = new User();
const post = new Post({});
const posts = new Posts();

const stores = { user, posts, post };

const App = observer(() => {
  return (
    <Router>
      <Provider {...stores}>
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/foodMap" exact render={() => <FoodMap />} />
        <Route path="/foodPost" exact render={() => <FoodPost />} />
        <Route path="/map" exact render={() => <Map />} />
        <Route path="/moreInfo" exact render={() => <MoreInfo />} />
      </Provider>
    </Router>
  );
});

export default App;
