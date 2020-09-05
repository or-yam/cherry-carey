import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const MapMarker = observer(({ post, lat, lng, windowHandler }) => {
  return (
    <div>
      <div
        onClick={() => {
          windowHandler(post, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {post.postType === 'cook' ? (
          <span role="img" aria-label="cook">
            👨‍🍳
          </span>
        ) : (
          <span role="img" aria-label="eat">
            🍽
          </span>
        )}
      </div>
      {!post.mapWindow ? (
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
          <h1>
            {'userName'} is {post.postType}: {post.mealName}
          </h1>
          <p>a {post.mealOrigin} food</p>
          <p>
            he will be ready at {post.date} for {post.mealTime}
          </p>
          <Link to="#">More Info</Link>
        </div>
      )}
    </div>
  );
});
export default MapMarker;
