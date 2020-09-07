import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
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
    // ) : (
    return (
      <div className='main-page'>
        <div className='top-nav'>
          <div style={{textAlign: 'center'}}>
          <Link to='/foodPost'>
            <Button style={{ width: '12vh' }} variant='outlined' color='primary'>
              <div>
                <AddCircleOutlineIcon />
                <p style={{ fontSize: '8px', margin: '0' }}>Add post</p>
              </div>
            </Button>
          </Link>
          </div>
          <div className='user-icon'>
            <img src={user.img} alt='user' />
            <span>{user.name}</span>
          </div>
          <div style={{textAlign: 'center'}}>
          <Button
            style={{ width: '12vh' }}
            variant='outlined'
            id='filter'
            color='primary'
          >
            <div>
              <FilterListTwoToneIcon />
              <p style={{ fontSize: '8px', margin: '0' }}>Filter</p>
            </div>
          </Button>
          </div>
        </div>

        <Map className='main-map' />

        <ButtonGroup
          fullWidth
          size='large'
          variant='contained'
          aria-label='contained primary button group'
        >
          <Button id='cook' color='primary' onClick={onFilter}>
            <img
              style={{ width: '50px' }}
              src='https://image.flaticon.com/icons/svg/1830/1830839.svg'
              alt='cookers'
            />
          </Button>
          <Button id='eat' color='secondary' onClick={onFilter}>
            <img
              style={{ width: '50px' }}
              src='https://image.flaticon.com/icons/svg/2737/2737034.svg'
              alt='eaters'
            />
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
