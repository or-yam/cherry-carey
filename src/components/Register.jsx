import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Logo from './Logo';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = inject('user')(
  observer((props) => {
    const { user } = props;
    const classes = useStyles();

    const onChange = (event) => {
      user.onInputChange(event);
    };

    const onSubmit = () => {
      user.userRegister();
    };

    return user.isSignin ? (
      <Redirect to="/foodMap" />
    ) : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Logo />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <p style={{ color: 'red' }}>{user.errMsg}</p>
          <div style={{marginTop: '0'}} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="nameInput"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="emailInput"
                  autoComplete="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordInput"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Register
            </Button>
          </div>
        </div>
        <Box style={{ textAlign: 'center' }} mt={4}>
          <Link to="/login" variant="body2">
            <span>Already have an account?</span> <span  style={{color: 'blue'}}>Login</span>
          </Link>
        </Box>
        <Box style={{ textAlign: 'center' }} mt={4}>
          <span>© Cherry carey 2020</span>
        </Box>
      </Container>
    );
  })
);

export default Register;
