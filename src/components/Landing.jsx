import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Logo from './Logo';

const Landing = () => {
  return (
    <div className="landing">
      <Logo />
      <h2>
        <span role="img" aria-label="cook">
          👨‍🍳
        </span>
        Social Cooking
        <span role="img" aria-label="dine">
          🍝
        </span>
      </h2>
      <Button color="primary">
        <Link to="/login">
          <NavigateNextIcon />
          Start Sharing
          <NavigateNextIcon />
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
