import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const MapMarker = observer(({ post, lat, lng, windowHandler }) => {
  return (
    <>
      <div
        onClick={() => {
          windowHandler(post, lat, lng);
        }}
        style={{ fontSize: '250%' }}
      >
        {post.postType === 'cook' ? (
          <img
            src="https://image.flaticon.com/icons/svg/1830/1830839.svg"
            alt="cook"
            style={{ width: '40px' }}
          />
        ) : (
          <img
            src="https://image.flaticon.com/icons/svg/2737/2737034.svg"
            alt="eat"
            style={{ width: '40px' }}
          />
        )}
      </div>
      {!post.mapWindow ? (
        <div></div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            display: 'grid',
            gridTemplateRows: '20% 70% 10%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            width: '250px',
            backgroundColor: 'white',
            boxShadow: '0 2px 7px 1px rgba(0,0,0,0.3)',
            fontSize: '13px',
            fontWeight: '300',
            padding: '12px',
            borderRadius: '7px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <img
              src={post.generatedBy.img}
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
                windowHandler(post, lat, lng);
              }}
            >
              X
            </button>
          </div>
          <div>
            <h1>
              {post.generatedBy.name.split(' ')[0]} Wants to {post.postType}:
            </h1>
            <h2>{post.mealName}</h2>
            <h3>
              For {post.mealTime} At {post.date}
            </h3>
            <h4>{post.price}$</h4>
          </div>
          <Link style={{ color: 'blue' }} to={`/moreInfo/${post.id}`}>
            Make Reservation
          </Link>
        </div>
      )}
    </>
  );
});
export default MapMarker;
