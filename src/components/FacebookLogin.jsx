import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import Button from '@material-ui/core/Button';
import { inject, observer } from 'mobx-react';

const FacebookLogin = inject('user')(
  observer((props) => {
    const { user } = props;

    const handleResponse = async (data) => {
      const { name, email, picture } = await data.profile;
      user.facebookRegister(email, name, picture.data.url);
    };

    const handleError = (error) => {
      console.log(error);
    };

    return (
      <FacebookProvider
        appId={process.env.REACT_APP_FB_API_KEY}
        style={{ border: 'none' }}
      >
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <Button
            style={{
              backgroundColor: 'rgb(17, 150, 245)',
              border: '0px',
              outline: '0',
            }}
            fullWidth
            variant="contained"
          >
            <img
              alt="fblogo"
              style={{ width: '8%' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            />
            <span
              style={{ marginRight: '10%', marginLeft: '10%', color: 'white' }}
            >
              Login with Facebook
            </span>
          </Button>
        </LoginButton>
      </FacebookProvider>
    );
  })
);

export default FacebookLogin;
