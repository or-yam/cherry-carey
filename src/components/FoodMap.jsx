import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterDrawer from './FilterDrawer';
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

    const onFilter = (event) => {
      posts.filterByType(event);
    };

    // return !user.isSignin ? (
    //   <Redirect to="/login" />
    // ) : 
    return (
      <div className="main-page">
        <div className="top-nav">
          <Link to="/foodPost">
            <Button variant="outlined" color="primary">
              <AddCircleOutlineIcon />
            </Button>
          </Link>
          <div className="user-icon">
            <img src={user.img} alt="user" />
            <span>{user.name}</span>
          </div>
          <Button id="filter">
            <FilterDrawer />
          </Button>
        </div>

        <Map className="main-map" />

        <ButtonGroup
          fullWidth
          size="large"
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button id="cook" color="primary" onClick={onFilter}>
            COOK
          </Button>
          <Button id="eat" color="secondary" onClick={onFilter}>
            EAT
          </Button>
        </ButtonGroup>
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
