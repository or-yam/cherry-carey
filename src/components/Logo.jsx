import React from 'react';
import cherryLogo from '../assets/images/cherry.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={cherryLogo} alt="logo" />
      <span className="logo-text red-text">herry </span>
      <span className="logo-text blue-text"> carey</span>
    </div>
  );
};

export default Logo;
