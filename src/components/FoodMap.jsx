import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link, Redirect } from 'react-router-dom';

const mapStyles = {
  width: '80%',
  height: '80%',
};

const FoodMap = inject(
  'user',
  'posts'
)(
  observer((props) => {
    const { user, posts } = props;
    useEffect(() => {
      posts.getFoodPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return !user.isSignin ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <div>
          <h1> hello {user.name}</h1>
          <img src={user.img} alt="user" />
          <Link to="/foodPost">Post</Link>
          {posts.foodPosts.map((post) => (
            <div>{post.mealName}</div>
          ))}
        </div>

        <Map
          google={props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{
            lat: 32.825942,
            lng: 34.957236,
          }}
        />
      </div>
    );
  })
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0',
})(FoodMap);
