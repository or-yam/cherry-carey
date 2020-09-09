import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import Button from '@material-ui/core/Button';

const FacebookLogin = () => {
  const [img, setImg] = React.useState('');
  const handleResponse = (data) => {
    console.log(data.profile.name);
    console.log(data.profile.email);
    console.log(data.profile.picture.data.url);
    setImg(data.profile.picture.data.url);
  };

  const handleError = (error) => {
    this.setState({ error });
  };

  return (
    <FacebookProvider appId="1118089085260436">
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
            alt='"facebookLogo"'
            style={{ width: '8%' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          />
          <span
            style={{ marginRight: '10%', marginLeft: '10%', color: 'white' }}
          >
            Login with Facebook
          </span>
          <img
            alt=''
            style={{ width: '8%', borderRadius: '50%' }}
            src={img}
          />
        </Button>
      </LoginButton>
    </FacebookProvider>
  );
};
export default FacebookLogin;
