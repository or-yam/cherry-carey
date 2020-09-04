import React from 'react';

const MapMarker = ({ post, windowHandler, lat, lng }) => {
  // post.window = false;
  return (
    <div>
      <div
        onClick={() => {
          windowHandler(post.window, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {post.postType}
      </div>
      {!post.window ? (
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
          <h1>{post.mealName}</h1>
        </div>
      )}
    </div>
  );
};
export default MapMarker;
