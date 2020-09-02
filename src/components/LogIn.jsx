import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [checkUser, setCheckUser] = useState(false);
  const [userNotExist, setUserNotExist] = useState('');
  const classes = useStyles();

  let emailText;
  let passwordText;

  const _handleTextFieldChange = (e) => {
    if (e.target.id === 'email') {
      emailText = e.target.value;
    } else if (e.target.id === 'password') {
      passwordText = e.target.value;
    }
  };

  const sendLogInData = () => {
    if (emailText === 'alonzager5@gmail.com') {
      setCheckUser(true);
    } else {
      //alert('User not exist, please register')
      setUserNotExist('User not exist, please register');
    }
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
          Login
        </Typography>
        <p style={{ color: 'red' }}>{userNotExist}</p>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={_handleTextFieldChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={_handleTextFieldChange}
          />
          <Button
            //type='submit'
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendLogInData}
          >
            Login
          </Button>
        </form>
      </div>
      <Box style={{ textAlign: 'center' }} mt={8}>
        <Link to="register" variant="body2">
          {"Don't have an account? Register"}
        </Link>
      </Box>
      <Box style={{ textAlign: 'center' }} mt={8}>
        <span>© Cherry carey 2020</span>
      </Box>
    </Container>
  );
}
