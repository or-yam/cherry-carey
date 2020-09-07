import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const MapMarkerUser = observer(({ user, lat, lng, windowHandler }) => {
  return (
    <div>
      <div
        onClick={() => {
          windowHandler(user, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        <span role="img" aria-label="cook">
          <img
            src="https://image.flaticon.com/icons/svg/684/684908.svg"
            alt="user"
            style={{ height: '30px' }}
          />
        </span>
      </div>
      {!user.mapWindow ? (
        <div></div>
      ) : (
        <div
          style={{
            height: '200px',
            width: '250px',
            backgroundColor: 'white',
            borderTopRightRadius: '8px%',
            boxShadow: '0 2px 7px 1px rgba(0,0,0,0.3)',
            fontSize: '13px',
            fontWeight: '300',
            padding: '12px',
          }}
        >
          <h1>Hey {user.name.split(' ')[0]}</h1>
          <p>You are here</p>
        </div>
      )}
    </div>
  );
});
export default MapMarkerUser;
