import 'date-fns';
import React from 'react'
import Logo from './Logo'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { sizing } from '@material-ui/system';
//import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  function valuetext(value) {
    return `${value} ₪`;
  }

  

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

export default function FoodPost() {
    const classes = useStyles();
  const [state, setState] = React.useState({
    //selectedDate: '',
    mealOrigin: '',
    allergies: '',
    mealTime: '',
    //name: 'hai',
  });

  const handleChange = (event) => {
    const mealOrigin = event.target.name;
    setState({
      ...state,
      [mealOrigin]: event.target.value,
    });
  };

  
      const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    }
  
    return (
        <div style={{textAlign: 'center'}}>
        <Logo />
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">MEAL ORIGIN</InputLabel>
          <Select
            native
            value={state.mealOrigin}
            onChange={handleChange}
            inputProps={{
              name: 'mealOrigin',
              id: 'mealOrigin',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Israeli</option>
            <option value={20}>Italian</option>
            <option value={30}>Thai</option>
            <option value={40}>Indian</option>
            <option value={50}>Moroccan</option>
          </Select>
        </FormControl>

        <br></br>
        <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="MEAL DESCRIPTION" />
        </FormControl>
        <br></br>

        <Typography id="discrete-slider" gutterBottom>
        LOCATION
      </Typography>
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="My location"
          labelPlacement="start"
        />
        <FormControlLabel
          value="My location"
          control={<Radio color="primary" />}
          label="Add location"
          labelPlacement="start"
        />
        <br></br>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">MEAL TIME</InputLabel>
          <Select
            native
            value={state.mealTime}
            onChange={handleChange}
            inputProps={{
              name: 'mealTime',
              id: 'mealTime',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Breakfast</option>
            <option value={20}>Lunch</option>
            <option value={30}>Dinner</option>
            <option value={40}>Night munchie</option>
          </Select>
        </FormControl>
        <br></br>
        
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
        <FormControl className={classes.formControl}>
      
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="DATE"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      
      </FormControl>
    </MuiPickersUtilsProvider>
    

        
            <br></br>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">ALLERGIES</InputLabel>
          <Select
            native
            value={state.allergies}
            onChange={handleChange}
            inputProps={{
              name: 'allergies',
              id: 'allergies',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Gluten</option>
            <option value={20}>Lactose</option>
            <option value={30}>Nuts</option>
            <option value={40}>Else</option>
          </Select>
        </FormControl>

        
        <Typography id="discrete-slider" gutterBottom>
        KOSHER
      </Typography>
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="yes"
          labelPlacement="start"
        />
        <FormControlLabel
          value="My location"
          control={<Radio color="primary" />}
          label="no"
          labelPlacement="start"
        />
        <br></br>
        
<FormControl className={classes.formControl}>
<Typography id="discrete-slider" gutterBottom>
        PRICE
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={marks1}
        min={10}
        max={50}
      />
       </FormControl>
       <br></br>

       <FormControl className={classes.formControl}>
<Typography id="discrete-slider" gutterBottom>
        DISTRIBUTION
        
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        //valueLabelDisplay="auto"
        step={30}
        marks={marks2}
        min={0}
        max={60}
      />
       </FormControl>
            <br></br>
       <Fab color="primary" variant="extended">
      <AddIcon />
         Add food image
      </Fab>
            <br></br>
            <br></br>
           
      <ButtonGroup size='large'   variant="contained"  aria-label="contained primary button group">
        <Button color="primary">COOK</Button>
        <Button color="Secondary">EAT</Button>
      </ButtonGroup>
            <br></br>
      <Link to='foodMap'  variant='body2'>
          {"Back to map"}
        </Link>
      
        </div>
    )
}




