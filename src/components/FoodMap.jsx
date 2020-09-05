import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';
import Map from './Map';

const FoodMap = inject(
  'user',
  'posts',
  'formInputs'
)(
  observer((props) => {
    const { user, posts, formInputs } = props;
    useEffect(() => {
      posts.getFoodPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    formInputs.clearInputs();

    return !user.isSignin ? (
      <Redirect to="/login" />
    ) : (
      <>
        <>
          <h1> hello {user.name}</h1>
          <img src={user.img} alt="user" />
          <Link to="/foodPost">Post</Link>
          {posts.foodPosts.map((post, index) => (
            <div key={index}>{post.mealName}</div>
          ))}
        </>
        <Map />
      </>
    );
  })
);
export default FoodMap;
