import React from 'react';
import { inject, observer } from 'mobx-react';

const FoodMap = inject('user')(
  observer((props) => {
    console.log(props.user.name);
    return (
      <div>
        <h1> hello{props.user.name}</h1>
        <img
          alt="map"
          src="https://art-sheep.com/wp-content/uploads/2019/07/Taste-Atlas-artsheep.png"
        />
      </div>
    );
  })
);

export default FoodMap;
