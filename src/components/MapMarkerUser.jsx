import React from 'react';
import { observer } from 'mobx-react';

const MapMarkerUser = observer(({ user, lat, lng, windowHandler }) => {
  return (
    <>
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
          <div style={{ display: 'flex' }}>
            <img
              src={user.img}
              alt="profile"
              style={{ height: '60px', marginRight: 'auto' }}
            />
            <button
              style={{
                height: '20px',
                backgroundColor: 'transparent',
                border: 'none',
              }}
              onClick={() => {
                windowHandler(user, lat, lng);
              }}
            >
              X
            </button>
          </div>
          <p>You are here {user.name}</p>
        </div>
      )}
    </>
  );
});
export default MapMarkerUser;
