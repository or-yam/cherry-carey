import React from 'react';
import Grid from '@material-ui/core/Grid';


export default function MealInfo() {
  return (
    <React.Fragment >
      <div style={{border: '2px solid double', borderRadius: '20px', borderStyle: 'double', borderColor: 'aqua'}}>
     
      <Grid container spacing={3}>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6}>
            <h2 style={{marginBottom: '3%'}}> Rice withe Chicken</h2>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6}>
            <h2 style={{marginBottom: '3%'}}>Thai<span style={{fontStyle: 'italic'}}> kitchen</span></h2>
         
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12}>
            <img style={{width: '35vh', borderRadius: '20%'}} src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/3/KC1807_Sunnys-Grilled-Sweet-and-Spicy-Chicken-Thighs-and-Rice_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536092264187.jpeg'></img>
          
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6}>
          <h3 style={{marginBottom: '3%'}}>TIME: Dinner</h3>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={6}>
          <h3 style={{marginBottom: '3%'}}>DATE: 10/9/20</h3>
        </Grid>
       
        
      </Grid>
      </div>
      
      <Grid style={{textAlign: 'center', marginTop: '5%'}} item xs={12}>
          <img src='https://image.flaticon.com/icons/svg/3400/3400934.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%' }}></img>
          <img src='https://image.flaticon.com/icons/svg/651/651092.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%'}}></img>
          <img src='https://image.flaticon.com/icons/svg/3081/3081371.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%'}}></img>
          <img src='https://image.flaticon.com/icons/svg/906/906206.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%'}}></img>
          <img src='https://image.flaticon.com/icons/svg/2599/2599638.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%'}}></img>
          <img src='https://image.flaticon.com/icons/svg/1581/1581782.svg' style={{width: '4vh', marginRight: '2%', marginLeft: '2%'}}></img>
          <img src='https://www.flaticon.com/premium-icon/icons/svg/1428/1428922.svg' style={{width: '5vh', marginRight: '2%', marginLeft: '2%'}}></img>
          
        </Grid>
    </React.Fragment>
  );
}