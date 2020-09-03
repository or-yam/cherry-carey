import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';

export default function NewMap(props) {
  const mapRef = useRef();
  const [state, setState] = React.useState({
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
  const expansionZoom = 18;
  const AnyReactComponent = ({ id, lat, lng, text, name, window }) => (
    <div>
      <div
        onClick={() => {
          openWindow(id, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {text}
      </div>
      {!window ? (
        <div></div>
      ) : (
        <div
          style={{
            height: '200px',
            width: '250px',
            backgroundColor: 'white',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            borderStyle: 'solid',
          }}
        >
          <h1>{name}</h1>
        </div>
      )}
    </div>
  );

  const openWindow = (id, lat, lng) => {
    state.postArr.map((p) => {
      let newPostArr = [...state.postArr];
      p.window = false;
      setState({ postArr: newPostArr });
    });
    for (let i = 0; i < state.postArr.length; i++) {
      if (id === state.postArr[i].id) {
        let newPostArr = [...state.postArr];
        newPostArr[i].window = true;
        setState({
          postArr: newPostArr,
        });
        mapRef.current.panTo({ lat: lat - 0.001, lng: lng + 0.0006 });
        mapRef.current.setZoom(expansionZoom);
      }
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0' }}
        defaultCenter={{ lat: state.lat, lng: state.lng }}
        defaultZoom={state.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        {state.postArr.map((p) => (
          <AnyReactComponent
            id={p.id}
            window={p.window}
            name={p.name}
            lat={p.lat}
            lng={p.lng}
            text={p.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
