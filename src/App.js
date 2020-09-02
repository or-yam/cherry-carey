import React from 'react';
import './App.css';
import Login from './components/LogIn';
import Register from './components/Register';
import FoodMap from './components/FoodMap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FoodPost from './components/FoodPost'

function App() {
  return (
    <Router>
      <div>
        
        
        <Route path='/' exact render={() => <Login />} />
        <Route path='/register' exact render={() => <Register />} />
        <Route path='/foodMap' exact render={() => <FoodMap />} />
        
      </div>
    </Router>
  );
}

export default App;
