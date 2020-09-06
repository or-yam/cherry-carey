import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function MealInfo(props) {
  const { postData } = props;
  return (
    <React.Fragment>
      <div
        style={{
          border: '2px solid double',
          borderRadius: '20px',
          borderStyle: 'double',
          borderColor: 'aqua',
        }}
      >
        <Grid container spacing={3}>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6}>
            <h2 style={{ marginBottom: '3%' }}> {postData.mealName}</h2>
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6}>
            <h2 style={{ marginBottom: '3%' }}>
              {postData.mealOrigin}
              <span style={{ fontStyle: 'italic' }}> Kitchen</span>
            </h2>
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12}>
            <img
              style={{ width: '35vh', borderRadius: '20%' }}
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/3/KC1807_Sunnys-Grilled-Sweet-and-Spicy-Chicken-Thighs-and-Rice_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536092264187.jpeg"
              alt="foodImag"
            />
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6}>
            <h3 style={{ marginBottom: '3%' }}>TIME: {postData.mealTime}</h3>
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={6}>
            <h3 style={{ marginBottom: '3%' }}>DATE: {postData.date}</h3>
          </Grid>
        </Grid>
      </div>

      <Grid style={{ textAlign: 'center', marginTop: '5%' }} item xs={12}>
        {postData.kosher ? (
          <img
            src="https://image.flaticon.com/icons/svg/3400/3400934.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="kosher"
          />
        ) : (
          <></>
        )}
        {postData.distribution === 'Delivery' ? (
          <img
            src="https://image.flaticon.com/icons/svg/651/651092.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="delivery"
          />
        ) : postData.distribution === 'Take away' ? (
          <img
            src="https://image.flaticon.com/icons/svg/3081/3081371.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="takeAway"
          />
        ) : (
          <img
            src="https://image.flaticon.com/icons/svg/906/906206.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="together"
          />
        )}

        {postData.allergies === 'Gluten' ? (
          <img
            src="https://image.flaticon.com/icons/svg/2599/2599638.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="gluten"
          />
        ) : postData.allergies === 'Nuts' ? (
          <img
            src="https://image.flaticon.com/icons/svg/1581/1581782.svg"
            style={{ width: '4vh', marginRight: '2%', marginLeft: '2%' }}
            alt="nuts"
          />
        ) : postData.allergies === 'Lactose' ? (
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/1428/1428922.svg"
            style={{ width: '5vh', marginRight: '2%', marginLeft: '2%' }}
            alt="lactose"
          />
        ) : (
          <img
            src="https://image.flaticon.com/icons/svg/2854/2854973.svg"
            style={{ width: '5vh', marginRight: '2%', marginLeft: '2%' }}
            alt="elseAl"
          />
        )}
      </Grid>
    </React.Fragment>
  );
}
