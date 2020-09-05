import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Landing = () => {
  return (
    <div className="landing">
      <Logo />
      <h2>
        <span role="img" aria-label="cook">
          👨‍🍳
        </span>
        Community Cooking
        <span role="img" aria-label="dine">
          🍝
        </span>
      </h2>

      <Link to="/login">Continue To App</Link>
    </div>
  );
};

export default Landing;
