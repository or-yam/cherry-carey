import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Logo from './Logo';

const Landing = () => {
  return (
    <div className="landing">
      <Logo />
      <h2>The Social Network For Food</h2>  
      <div className="landing-img-container">
        <img
          alt="eating"
          src="https://image.freepik.com/free-photo/friends-eating_23-2147680636.jpg"
        />
      </div>
      <div>
        <Button variant="contained" color="primary">
          <Link to="/login">Let's start</Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
