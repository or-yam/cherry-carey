import React from 'react';
import cherryLogo from '../cherry.svg';

const Logo = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <img style={{ width: '7vh' }} src={cherryLogo} alt="logo" />
      <span style={{ color: 'red', fontSize: '8vh' }}>herry </span>
      <span style={{ color: 'aqua', fontSize: '8vh' }}> carey</span>
    </div>
  );
};

export default Logo;
