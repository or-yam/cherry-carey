import 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Logo from './Logo';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';

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

const valueText = (value) => `${value} ₪`;

const marks1 = [
  {
    value: 10,
    label: '10 ₪',
  },
  {
    value: 20,
    label: '20 ₪',
  },
  {
    value: 30,
    label: '30 ₪',
  },
  {
    value: 40,
    label: '40 ₪',
  },
  {
    value: 50,
    label: '50 ₪',
  },
];

const marks2 = [
  {
    value: 0,
    label: 'Delivery',
  },
  {
    value: 30,
    label: 'Be social - Eat together',
  },
  {
    value: 60,
    label: 'Take away',
  },
];

const FoodPost = inject('post')(
  observer((props) => {
    const classes = useStyles();

    const { post } = props;

    const onchange = (event) => {
      post.onInputChange(event);
    };

    const [kosherChecked, setKosherChecked] = React.useState(false);
    const switchKosher = (e) => {
      setKosherChecked((prev) => !prev);
      console.log(kosherChecked);
    };

    const [locationChecked, setLocationChecked] = React.useState(false);
    const switchLocation = (e) => {
      setLocationChecked((prev) => !prev);
      console.log(locationChecked);
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <Logo />

        <FormControl className={classes.formControl}>
          <TextField onChange={onchange} name="mealName" label="MEAL NAME" />
        </FormControl>

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

        <br></br>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">ALLERGIES</InputLabel>
          <Select
            native
            onChange={onchange}
            inputProps={{
              name: 'allergies',
              id: 'allergies',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'Gluten'}>Gluten</option>
            <option value={'Lactose'}>Lactose</option>
            <option value={'Nuts'}>Nuts</option>
            <option value={'Else'}>Else</option>
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
              // value={state.date}
              onChange={onchange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormControl>
        </MuiPickersUtilsProvider>

        <br></br>
        <FormControl className={classes.formControl}>
          <Typography component="div">
            <Grid
              style={{ justifyContent: 'center' }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>YES</Grid>
              <Grid item>
                <FormControlLabel
                  value="KOSHER"
                  control={<Switch color="primary" />}
                  label="KOSHER"
                  labelPlacement="top"
                  onChange={switchKosher}
                />
              </Grid>
              <Grid item>NO</Grid>
            </Grid>
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography component="div">
            <Grid
              style={{ justifyContent: 'center' }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>MY</Grid>
              <Grid item>
                <FormControlLabel
                  value="LOCATION"
                  control={<Switch color="primary" />}
                  label="LOCATION"
                  labelPlacement="top"
                  onChange={switchLocation}
                />
              </Grid>
              <Grid item>ADD</Grid>
            </Grid>
          </Typography>
        </FormControl>
        <br></br>
        <FormControl className={classes.formControl}>
          <Typography id="discrete-slider" gutterBottom>
            PRICE
          </Typography>
          <Slider
            name="price"
            defaultValue={30}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks={marks1}
            min={10}
            max={50}
            onChange={onchange}
            id="price"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography id="discrete-slider" gutterBottom>
            DISTRIBUTION
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider"
            step={30}
            marks={marks2}
            min={0}
            max={60}
            onChange={() => post.onInputChange}
            id="distribution"
            name="distribution"
          />
        </FormControl>
        <br></br>
        <Fab color="primary" variant="extended">
          <AddIcon />
          Add food image
        </Fab>
        <br></br>
        <br></br>

        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button id="cook" onClick={''} color="primary">
            COOK
          </Button>
          <Button id="eat" onClick={''} color="Secondary">
            EAT
          </Button>
        </ButtonGroup>
        <br></br>
        <Link to="foodMap" variant="body2">
          {'Back to map'}
        </Link>
      </div>
    );
  })
);

export default FoodPost;

/*
  const [state, setState] = React.useState({
    postType: '',
    mealOrigin: '',
    allergies: '',
    mealTime: '',
    mealName: '',
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    location: getLocation(),
    locationLat: '',
    locationLan: '',
    kosher: '',
    distribution: 'Be social - Eat together',
    price: '',
  });

  const handleSelectChange = (event) => {
    let newSelect = event.target.name;
    setState({
      ...state,
      [newSelect]: event.target.value,
    });
  };

  const handlePriceChange = (e, newValue) => {
    setState({
      ...state,
      price: newValue,
    });

    console.log(newValue);
  };

  const handleDistributionChange = (e, newValue) => {
    setState({
      ...state,
      distribution:
        newValue === 60
          ? 'Take away'
          : newValue === 0
          ? 'Delivery'
          : 'Be social - Eat together',
    });

    console.log(newValue);
  };

  const handleMealName = (e) => {
    setState({
      ...state,
      mealName: e.target.value,
    });
  };

  const handleKosher = (e) => {
    setState({
      ...state,
      kosher: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    console.log(date);
    setState({
      ...state,
      date: date,
    });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    setState({
      locationLat: position.coords.latitude,
      locationLan: position.coords.longitude,
    });
  };

  ///////////////////////////////////////////////////////////

  const sendFoodPost = () => {
    let foodPost = {};
    foodPost.postType = state.postType;
    foodPost.mealOrigin = state.mealOrigin;
    foodPost.allergies = state.allergies;
    foodPost.mealTime = state.mealTime;
    foodPost.mealName = state.mealName;
    foodPost.date = state.date;
    foodPost.locationLat = state.locationLat;
    foodPost.locationLan = state.locationLan;
    foodPost.kosher = state.kosher;
    foodPost.distribution = state.distribution;
    foodPost.price = state.price;
    console.log(foodPost);
  };

  const postType = (e) => {
    setState({
      ...state,
      postType: e.target.id,
    });
    sendFoodPost();
  };

*/
