import React from 'react';
import { inject, observer } from 'mobx-react';

// import { locationRangeMarks } from '../Utilities/SlideBarMarks'; // location filter
// import Typography from '@material-ui/core/Typography'; // location filter
// import Slider from '@material-ui/core/Slider'; // location filter
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    maxWidth: 1,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// const valueText = (value) => {
//   // location filter
//   return `${value}km`;
// };

const FilterMap = inject('formInputs')(
  observer((props) => {
    const classes = useStyles();

    const { formInputs } = props;

    const onchange = (event) => {
      formInputs.onInputChange(event);
    };

    const onDateChange = (event) => {
      formInputs.onDateInputChange(event);
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">MEAL ORIGIN</InputLabel>
          <Select
            native
            onChange={onchange}
            inputProps={{
              name: 'mealOrigin',
              id: 'mealOrigin',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'Israeli'}>Israeli</option>
            <option value={'Italian'}>Italian</option>
            <option value={'Thai'}>Thai</option>
            <option value={'Indian'}>Indian</option>
            <option value={'Moroccan'}>Moroccan</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">MEAL TIME</InputLabel>
          <Select
            native
            onChange={onchange}
            inputProps={{
              name: 'mealTime',
              id: 'mealTime',
            }}
          >
            <option aria-label="None" value="" />
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
              margin="normal"
              name="date"
              label="Date"
              format="MM/dd/yyyy"
              value={formInputs.date}
              onChange={onDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormControl>
        </MuiPickersUtilsProvider>

        <br></br>
        {/* location filter */}

        {/* <FormControl
          style={{ textAlign: 'center' }}
          className={classes.formControl}
        >
          <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
              Location range
              <img
                style={{ width: '5vh' }}
                src="https://cdn4.iconfinder.com/data/icons/map-navigation-3/512/15-512.png"
                alt="location"
              />
            </Typography>
            <Slider
              value={'value'}
              onChange={'handleChange'}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valueText}
              marks={locationRangeMarks}
            />
          </div>
          <br></br>
        </FormControl> */}
      </div>
    );
  })
);

export default FilterMap;
