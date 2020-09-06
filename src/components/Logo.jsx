import React from 'react';
import cherryLogo from '../cherryLogo.png'

const Logo = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <img
        style={{ width: '6vh' }}
        src={cherryLogo}
        //src="https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/19-512.png"
        alt="logo"
      />
      <span style={{ color: 'red', fontSize: '8vh' }}>herry </span>
      <span style={{ color: 'aqua', fontSize: '8vh' }}> carey</span>
    </div>
  );
};

export default Logo;
