import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const [checkUser, setCheckUser] = useState(false);
  const classes = useStyles();

  let NameText;
  let emailText;
  let passwordText;

  const _handleTextFieldChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'gName':
        NameText = e.target.value;
        break;
      case 'email':
        emailText = e.target.value;
        break;
      case 'password':
        passwordText = e.target.value;
    }
  };

  const sendLogInData = () => {
    if (emailText === 'alonzager5@gmail.com') {
      setCheckUser(true);
    }
    console.log(NameText);
    console.log(emailText);
    console.log(passwordText);
  };

  return checkUser ? (
    <Redirect to="/foodMap" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Logo />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                onChange={_handleTextFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={_handleTextFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={_handleTextFieldChange}
              />
            </Grid>
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendLogInData}
          >
            Register
          </Button>
        </form>
      </div>
      <Box style={{ textAlign: 'center' }} mt={8}>
        <Link to="/" variant="body2">
          {'Already have an account? Login'}
        </Link>
      </Box>
      <Box style={{ textAlign: 'center' }} mt={8}>
        <span>© Cherry carey 2020</span>
      </Box>
    </Container>
  );
}
