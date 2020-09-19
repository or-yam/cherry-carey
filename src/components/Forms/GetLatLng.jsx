import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { inject, observer } from 'mobx-react';

const GetLatLng = inject('formInputs')(
  observer((props) => {
    const { formInputs } = props;

    const onchange = (event) => {
      formInputs.onInputChange(event);
    };

    const getLatLng = () => {
      formInputs.setPositionByAdress();
    };

    return (
      <>
        <TextField
          style={{ textAlign: 'center' }}
          onChange={onchange}
          name="adressInput"
          label="INSERT ADDRESS"
        />
        <br></br>
        <Button
          style={{ marginTop: '1%' }}
          variant="contained"
          color="primary"
          onClick={getLatLng}
        >
          ADD
        </Button>
      </>
    );
  })
);

export default GetLatLng;
