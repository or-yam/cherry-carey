import React from 'react';
import { inject, observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MealInfo from './MealInfo';
import PaymentForm from './PaymentForm';
import Review from './Review';

import Logo from './Logo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Box style={{ textAlign: 'center' }} mt={8}>
        <span>© Cherry carey 2020</span>
      </Box>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['The Meal', 'Payment', 'Confirm'];

function getStepContent(step, postData) {
  switch (step) {
    case 0:
      return <MealInfo postData={postData} />;
    case 1:
      return <PaymentForm postData={postData} />;
    case 2:
      return <Review postData={postData} />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = inject('posts')(
  observer((props) => {
    const location = useLocation();
    const postId = parseInt(location.pathname.split('/')[2]);
    const postData = props.posts.foodPosts.find((post) => post.id === postId);

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <Logo />
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    {' Thank you ;)'}
                  </Typography>
                  <Typography variant="subtitle1">
                    We have emailed your meal confirmation.
                  </Typography>
                  <Typography
                    style={{
                      color: 'red',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      marginTop: '5%',
                    }}
                    variant="h5"
                    gutterBottom
                  >
                    Bon appétit
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, postData)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  })
);

export default Checkout;
