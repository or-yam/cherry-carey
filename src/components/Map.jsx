import React, { useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import { inject, observer } from 'mobx-react';

const NewMap = inject('posts')(
  observer((props) => {
    const { posts } = props;

    const mapRef = useRef();
    const defaultMapProps = {
      zoom: 14,
      lat: 32.077937,
      lng: 34.774263,
    };

    const expansionZoom = 18;

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
        </GoogleMapReact>
      </div>
    );
  })
);

export default NewMap;
