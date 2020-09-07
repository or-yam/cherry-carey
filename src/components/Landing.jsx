import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Logo from './Logo';

const Landing = () => {
  return (
    <div style={{textAlign: 'center' }} className='landing'>
      <Logo />
      <h1 style={{marginBottom: '0'}}>The food social network</h1>  
      <div>
      <img style={{ width: '40vh', height: '40vh', borderRadius: '50%'}} src='https://image.freepik.com/free-photo/friends-eating_23-2147680636.jpg' />
      </div>
          
      <div > 
                  
        <Button style={{width: '40vh', textAlign: 'center'}} variant='contained' color='primary'>
        
          <Link to='/login'>Let's start</Link>
        </Button>          
      </div>
    </div>
  );
};

export default Landing;
