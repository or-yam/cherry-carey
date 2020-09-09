import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const logOut = () => {
  localStorage.clear()
  window.location.reload();
};

const UserPage = inject(
  'user',
  'posts'
)(
  observer((props) => {
    const { user, posts } = props;
    const userPosts = posts.foodPosts.filter(
      (post) => post.generatedBy.email === user.email
    );
    const classes = useStyles();

    return (
      <Container style={{ textAlign: 'center' }} maxWidth="sm">
        <Avatar
          style={{ margin: 'auto', marginTop: '10%' }}
          alt={user.name}
          src={user.img}
          className={classes.large}
        />
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ padding: '0.7vh' }} align="left">
                  Food name
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align="left">
                  Food type
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align="left">
                  Date
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align="left">
                  Time
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align="left">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell
                    style={{ padding: '0.7vh' }}
                    component="th"
                    scope="row"
                  >
                    {post.mealName}
                  </TableCell>
                  <TableCell style={{ padding: '0.7vh' }} align="left">
                    {post.postType}
                  </TableCell>
                  <TableCell style={{ padding: '0.7vh' }} align="left">
                    {post.date}
                  </TableCell>
                  <TableCell style={{ padding: '0.7vh' }} align="left">
                    {post.mealTime}
                  </TableCell>
                  <TableCell style={{ padding: '0.7vh' }} align="left">
                    {post.price} $
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <Button
          onClick={logOut}
          style={{ margin: '10%' }}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          <Link to="/" variant="body2">
            Logout
          </Link>
        </Button>
        <br></br>
        <Link style={{ marginTop: '20%' }} to="foodMap" variant="body2">
          <span style={{ color: 'blue' }}>Back to map</span>
        </Link>
      </Container>
    );
  })
);

export default UserPage;
