import React from 'react';
import { inject, observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FilterListIcon from '@material-ui/icons/FilterList';
import Fab from '@material-ui/core/Fab';

import FilterMap from './FilterMap';

const FilterDrawer = inject(
  'formInputs',
  'posts'
)(
  observer((props) => {
    const { posts, formInputs } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const onFilterSubmit = () => {
      const filters = formInputs.submitFilters();
      posts.filterByValues(filters);
    };

    const clearInputs = () => {
      formInputs.clearInputs();
    };

    return (
      <div>
        <Button
          style={{ width: '12vh' }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          <div>
            <FilterListIcon />
            <p style={{ fontSize: '8px', margin: '0' }}>Filter</p>
          </div>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Filter</DialogTitle>
          <DialogContent>
            <FilterMap />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              <Fab
                style={{ border: 'solid 2px' }}
                onClick={clearInputs}
                color="primary"
                aria-label="add"
              >
                <img
                  style={{ width: '5vh' }}
                  src="https://image.flaticon.com/icons/svg/3126/3126610.svg"
                  alt="filter"
                />
              </Fab>
            </Button>
            <Button onClick={handleClose} color="primary">
              <Fab
                style={{
                  border: 'solid 2px',
                }}
                onClick={onFilterSubmit}
                color="primary"
                aria-label="add"
              >
                <img
                  style={{ width: '10vh' }}
                  src="https://image.flaticon.com/icons/svg/3115/3115993.svg"
                  alt="filter"
                />
              </Fab>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  })
);

export default FilterDrawer;
