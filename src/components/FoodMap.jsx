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

    // return !user.isSignin ? (
    //   <Redirect to="/login" />
    // ) :
    return (
      <div className="main-page">
        <div className="top-nav">
          <Link to="/foodPost">Add Post</Link>
          <div className="user-icon">
            <h1>{user.name}</h1>
            <img src={user.img} alt="user" />
          </div>
          <button>Filter</button>
        </div>
        <Map className="main-map" />
        <div className="bottom-nav">
          <button>Cookers</button>
          <button>Eaters</button>
        </div>
      </div>
    );
  })
);
export default FoodMap;

/*
  {posts.foodPosts.map((post, index) => {
            return (
              <div key={index}>
                {post.mealName}, {post.price}$
              </div>
            );
          })}
 */
