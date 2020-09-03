import React from 'react';
import { inject, observer } from 'mobx-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';

const mapStyles = {
  width: '80%',
  height: '80%',
};

const FoodMap = inject('user')(
  observer((props) => {
    return (
      <div>
        <div>
          <h1> hello {props.user.name}</h1>
          <img src={props.user.img} alt="user" />
          <Link to="/foodPost">Post</Link>
        </div>

        <Map
          google={props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            lat: 32.825942,
            lng: 34.957236,
          }}
        />
      </div>
    );
  })
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0',
})(FoodMap);
