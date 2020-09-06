import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        MEAL confirmation
      </Typography>
     
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
        <Grid item container direction="column" xs={12} >
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        
      </Grid>
    </React.Fragment>
  );
}