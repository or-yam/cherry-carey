import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import Login from './components/LogIn';
import Register from './components/Register';
import FoodMap from './components/FoodMap';

import './App.css';

import { User } from './MobxStores/User';
import { Posts } from './MobxStores/Posts';
import FoodPost from './components/FoodPost';

const user = new User();
const posts = new Posts();

const stores = { user, posts };

const App = observer(() => {
  return (
    <Router>
      <Provider {...stores}>
        <Route path="/" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/foodMap" exact render={() => <FoodMap />} />
        <Route path="/foodPost" exact render={() => <FoodPost />} />
      </Provider>
    </Router>
  );
});

export default App;
