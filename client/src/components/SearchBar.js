import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();

  return (
          
    <form className={classes.container} noValidate autoComplete="off">
          
      <TextField
        id="outlined-full-width"
        label="Category Search"
        style={{ margin: 20 }}
        placeholder="Placeholder"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
