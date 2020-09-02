import React from 'react';
import { inject, observer } from 'mobx-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const FoodMap = inject('user')(
  observer((props) => {
    console.log(props.user.name);
    return (
      <div>
        <div>
          <h1> hello {props.user.name}</h1>
          <img src={props.user.img} alt="user" />
        </div>

        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
      </div>
    );
  })
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0',
})(FoodMap);
