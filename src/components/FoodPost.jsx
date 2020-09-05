import 'date-fns';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { priceMarks, distributionMarks } from '../Utilities/SlideBarMarks';

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

const FoodPost = inject(
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

    const toggleValue = (event) => {
      formInputs.toggleValue(event);
    };

    const sliderChange = (event, val) => {
      formInputs.sliderChange(event, val);
    };

    const onSubmit = (event) => {
      const newPost = formInputs.submitPost(event, user.id);
      posts.addPost(newPost);
    };

    return formInputs.postType ? (
      <Redirect to="/foodMap" />
    ) : (
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
              value={formInputs.date}
              onChange={onDateChange}
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
                  name="kosher"
                  value={formInputs.kosher}
                  control={<Switch color="primary" />}
                  label="KOSHER"
                  labelPlacement="top"
                  onChange={toggleValue}
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
                  name="location"
                  value={formInputs.location}
                  control={<Switch color="primary" />}
                  label="LOCATION"
                  labelPlacement="top"
                  onChange={toggleValue}
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
            className="slider"
            id="price"
            name="price"
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            defaultValue={30}
            step={10}
            marks={priceMarks}
            min={10}
            max={50}
            onChange={sliderChange}
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
            marks={distributionMarks}
            min={0}
            max={60}
            onChange={sliderChange}
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
          <Button id="cook" onClick={onSubmit} color="primary">
            COOK
          </Button>
          <Button id="eat" onClick={onSubmit} color="secondary">
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
