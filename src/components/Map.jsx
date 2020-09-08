import React, { useRef } from 'react';
import { inject, observer } from 'mobx-react';

import MapMarker from './MapMarker';
import MapMarkerUser from './MapMarkerUser';

import GoogleMapReact from 'google-map-react';

const Map = inject(
  'posts',
  'user'
)(
  observer((props) => {
    const { posts, user } = props;

    const mapRef = useRef();

    const defaultMapProps = {
      zoom: 12,
      lat: navigator.geolocation ? user.lat : 32.077937,
      lng: navigator.geolocation ? user.lng : 34.774263,
    };

    const expansionZoom = 16;

    const windowHandler = (post, lat, lng) => {
      post.mapWindowToggle();
      mapRef.current.panTo({ lat: lat - 0.001, lng: lng + 0.0006 });
      mapRef.current.setZoom(expansionZoom);
    };

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={{ lat: defaultMapProps.lat, lng: defaultMapProps.lng }}
          defaultZoom={defaultMapProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
        >
          {posts.filteredPosts.map((p) => (
            <MapMarker
              key={p.id}
              post={p}
              lat={p.locationLat}
              lng={p.locationLng}
              windowHandler={windowHandler}
            />
          ))}
          <MapMarkerUser
            key={user.id}
            user={user}
            lat={user.lat}
            lng={user.lng}
            windowHandler={windowHandler}
          />
        </GoogleMapReact>
      </div>
    );
  })
);

export default Map;
