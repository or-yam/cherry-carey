import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { locationRangeMarks } from '../Utilities/SlideBarMarks';

import Logo from './Logo';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),

    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function valuetext(value) {
  return `${value}km`;
}
const FilterMap = inject(
  'formInputs',
  'user',
  'posts'
)(
  observer((props) => {
    const classes = useStyles();

    const { user, formInputs, posts } = props;

    const onchange = (event) => {
      formInputs.onInputChange(event);
    };

    const onDateChange = (event) => {
      formInputs.onDateInputChange(event);
    };
    //////////////////////////////////////////////////////////////////

    const [value, setValue] = React.useState([33, 66]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const filterMap = () => {
      console.log(value);
    };

    const clearFilter = () => {
      console.log('clear filters');
    };
    ////////////////////////////////////////////////////////////////////
    return formInputs.postType ? (
      <Redirect to='/foodMap' />
    ) : (
      <div style={{ textAlign: 'center' }}>
        <Logo />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-native-simple'>MEAL ORIGIN</InputLabel>
          <Select
            native
            onChange={onchange}
            inputProps={{
              name: 'mealOrigin',
              id: 'mealOrigin',
            }}
          >
            <option aria-label='None' value='' />
            <option value={'Israeli'}>Israeli</option>
            <option value={'Italian'}>Italian</option>
            <option value={'Thai'}>Thai</option>
            <option value={'Indian'}>Indian</option>
            <option value={'Moroccan'}>Moroccan</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-native-simple'>MEAL TIME</InputLabel>
          <Select
            native
            onChange={onchange}
            inputProps={{
              name: 'mealTime',
              id: 'mealTime',
            }}
          >
            <option aria-label='None' value='' />
            <option value={'Breakfast'}>Breakfast</option>
            <option value={'Lunch'}>Lunch</option>
            <option value={'Dinner'}>Dinner</option>
            <option value={'Night munchie'}>Night munchie</option>
          </Select>
        </FormControl>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormControl className={classes.formControl}>
            <KeyboardDatePicker
              margin='normal'
              name='date'
              label='Date'
              format='MM/dd/yyyy'
              value={formInputs.date}
              onChange={onDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormControl>
        </MuiPickersUtilsProvider>

        <br></br>

        <FormControl
          style={{ textAlign: 'center' }}
          className={classes.formControl}
        >
          <div className={classes.root}>
            <Typography id='range-slider' gutterBottom>
              Location range
              <img
                style={{ width: '5vh' }}
                src='https://cdn4.iconfinder.com/data/icons/map-navigation-3/512/15-512.png'
              ></img>
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              getAriaValueText={valuetext}
              marks={locationRangeMarks}
            />
          </div>
          <br></br>

          <div style={{textAlign: 'center'}}>
          <Fab style={{width: '16vh', height: '16vh', marginBottom: '5%', border: 'solid 2px'}} onClick={filterMap} color='primary' aria-label='add'>
            <img
              style={{ width: '10vh' }}
              src='https://image.flaticon.com/icons/svg/3115/3115993.svg'
            ></img>
          </Fab>
          <br></br>
          <Fab style={{border: 'solid 2px'}} onClick={clearFilter} color='primary' aria-label='add'>
            <img
              style={{ width: '5vh' }}
              src='https://image.flaticon.com/icons/svg/3126/3126610.svg'
            ></img>
          </Fab>
          </div>
          <br></br>
          <Link style={{ marginTop: '5%' }} to='foodMap' variant='body2'>
            {'Back to map'}
          </Link>
        </FormControl>
      </div>
    );
  })
);

export default FilterMap;
