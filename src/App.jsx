import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import Login from './components/Login/LogIn';
import Register from './components/Login/Register';
import FoodPost from './components/Forms/FoodPost';
import FoodMap from './components/Map/FoodMap';

import MoreInfo from './components/Post-Info/MoreInfo';
import Landing from './components/Landing';
import UserPage from './components/UserPage';

import './Styles/App.css';

import { User } from './MobxStores/User';
import { Posts } from './MobxStores/Posts';
import { FormInputs } from './MobxStores/FormInputs';

const user = new User();
const posts = new Posts();
const formInputs = new FormInputs();

const stores = { user, posts, formInputs };

const App = observer(() => {
  return (
    <Router>
      <Provider {...stores}>
        <Route path="/" exact render={() => <Landing />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/foodMap" exact render={() => <FoodMap />} />
        <Route path="/foodPost" exact render={() => <FoodPost />} />
        <Route path="/userPage" exact render={() => <UserPage />} />
        <Route path="/moreInfo/:id" exact render={() => <MoreInfo />} />
      </Provider>
    </Router>
  );
});

export default App;
