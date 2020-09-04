import React from 'react';

const MapMarker = ({ post, windowHandler }) => {
  return (
    <div>
      <div
        onClick={() => {
          windowHandler(post.id, post.lat, post.lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {post.text}
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
          <h1>{post.name}</h1>
        </div>
      )}
    </div>
  );
};
export default MapMarker;
