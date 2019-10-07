import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

/* Custom styles from material-Ui */
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

/* SearchBar component begins here. */
export default function SearchBar() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Search Item"
        style={{ margin: 20 }}
        placeholder="Type something ... "
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
