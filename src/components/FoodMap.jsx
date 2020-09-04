import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';
import Map from './Map';

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

        <Map />
      </div>
    );
  })
);
export default FoodMap;
