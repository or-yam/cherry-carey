import React from 'react';
import Geocode from 'react-geocode';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function GetLatLng() {
  const [inputAddress, setInputAddress] = React.useState('');
  Geocode.setApiKey('AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0');
  Geocode.setLanguage('en');
  Geocode.enableDebug();

  const getLatLng = () => {
    Geocode.fromAddress(inputAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const onchange = (e) => {
    setInputAddress([e.target.value]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <TextField
      style={{width: '100vh'}}
        onChange={onchange}
        name='inputAddress'
        label='INSERT ADDRESS'
      />
      <br></br>
      
      <Button
        style={{ marginTop: '1%' }}
        variant='contained'
        color='primary'
        onClick={getLatLng}
      >
        Send
      </Button>
      
    </div>
  );
}
