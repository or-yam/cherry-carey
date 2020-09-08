import React from 'react';
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
import { Link, Redirect } from 'react-router-dom';

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

function createData(name, type, date, time, status) {
  return { name, type, date, time, status };
}

const rows = [
  createData('Pad Thai', 'Thai', '10/9/20', 'Dinner', 'pending'),
  createData('Ptitim', 'Israeli', '15/8/20', 'Breakfast', 'Done'),
  createData('Pasta', 'Italian', '2/4/20', 'lunch', 'Done'),
];

const logOut = () => {
  window.location.reload();
  console.log('logout');
};
export default function UserPage() {
  const classes = useStyles();

  return (
    <Container style={{ textAlign: 'center' }} maxWidth='sm'>
      <Avatar
        style={{ margin: 'auto', marginTop: '10%' }}
        alt='Remy Sharp'
        src='https://image.freepik.com/free-photo/portrait-blonde-young-woman-looking-camera-against-gray-background_23-2148029484.jpg'
        className={classes.large}
      />

      <h1>Remy Sharp</h1>
      <h3>remy@gmail.com</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: '0.7vh' }} align='left'>
                Food name
              </TableCell>
              <TableCell style={{ padding: '0.7vh' }} align='left'>
                Food type
              </TableCell>
              <TableCell style={{ padding: '0.7vh' }} align='left'>
                Date
              </TableCell>
              <TableCell style={{ padding: '0.7vh' }} align='left'>
                Time
              </TableCell>
              <TableCell style={{ padding: '0.7vh' }} align='left'>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  style={{ padding: '0.7vh' }}
                  component='th'
                  scope='row'
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align='left'>
                  {row.type}
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align='left'>
                  {row.date}
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align='left'>
                  {row.time}
                </TableCell>
                <TableCell style={{ padding: '0.7vh' }} align='left'>
                  {row.status}
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
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        <Link to='foodMap' variant='body2'>
          Logout
        </Link>
      </Button>
      <br></br>
      <Link style={{ marginTop: '20%' }} to='foodMap' variant='body2'>
        <span style={{ color: 'blue' }}>Back to map</span>
      </Link>
    </Container>
  );
}
