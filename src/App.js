import React from 'react';
import './App.css';
import Login from './components/LogIn';
import Register from './components/Register';
import FoodMap from './components/FoodMap'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
