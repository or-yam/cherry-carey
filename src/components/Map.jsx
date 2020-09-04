import React, { useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import { inject, observer } from 'mobx-react';

const NewMap = inject('posts')(
  observer((props) => {
    const { posts } = props;

    useEffect(() => {
      posts.getFoodPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0' }}
          defaultCenter={{ lat: defaultMapProps.lat, lng: defaultMapProps.lng }}
          defaultZoom={defaultMapProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
        >
          {posts.foodPosts.map((p) => (
            <MapMarker
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

/*
 const [state, setState] = useState({
      zoom: 14,
      lat: 32.077937,
      lng: 34.774263,
      postArr: [
        {
          id: 1,
          window: false,
          lat: 32.0727,
          lng: 34.7747,
          text: '🍴',
          name: 'dadi',
        },
        {
          id: 2,
          window: false,
          lat: 32.0757,
          lng: 34.7757,
          text: '🍴',
          name: 'gadi',
        },
        {
          id: 3,
          window: false,
          lat: 32.0747,
          lng: 34.7767,
          text: '🍴',
          name: 'babi',
        },
        {
          id: 4,
          window: false,
          lat: 32.0775,
          lng: 34.7777,
          text: '‍👨‍🍳',
          name: 'nir',
        },
        {
          id: 5,
          window: false,
          lat: 32.0774,
          lng: 34.7717,
          text: '‍👨‍🍳',
          name: 'shir',
        },
        {
          id: 6,
          window: false,
          lat: 32.0791,
          lng: 34.7735,
          text: '‍👨‍🍳',
          name: 'lior',
        },
      ],
    });
*/
