import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Logo from '../Logo';
import FacebookLogin from './FacebookLogin';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = inject('user')(
  observer((props) => {
    const classes = useStyles();

    const { user } = props;

    const onChange = (event) => {
      user.onInputChange(event);
    };

    const onCheckChange = () => {
      user.onRememberChange();
    };

    const onSubmit = () => {
      user.userLogin();
    };

    return user.isSignin || user.getUserFromLocalStorage() ? (
      <Redirect to="/foodMap" />
    ) : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Logo />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <p className="error-msg">{user.errMsg}</p>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="emailInput"
              autoComplete="email"
              autoFocus
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordInput"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Login
            </Button>
            <FacebookLogin />
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.isRememberMe}
                  onChange={onCheckChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label=" Remember me"
            ></FormControlLabel>
          </div>
        </div>
        <Box className="infoBox" mt={4}>
          <span>Don't have an account? </span>
          <Link
            to="register"
            variant="body2"
            onClick={() => user.clearErrMsg()}
          >
            <span className="link">Register</span>
          </Link>
        </Box>
        <Box className="infoBox" mt={4}>
          <span>© Cherry carey 2020</span>
        </Box>
      </Container>
    );
  })
);

export default Login;
