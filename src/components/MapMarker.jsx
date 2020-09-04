import React from 'react';
import { observer } from 'mobx-react';

const MapMarker = observer(({ post, lat, lng, windowHandler }) => {
  return (
    <div>
      <div
        onClick={() => {
          windowHandler(post, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {post.postType}
      </div>
      {!post.mapWindow ? (
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
});
export default MapMarker;
