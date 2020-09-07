import React from 'react';
import cherryLogo from '../cherry.svg';

const Logo = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img style={{ width: '7vh' }} src={cherryLogo} alt="logo" />
      <span style={{ color: '#EF476F', fontSize: '7.5vh' }}>herry </span>
      <span style={{ color: '#118AB2', fontSize: '7.5vh' }}> carey</span>
    </div>
  );
};

export default Logo;
