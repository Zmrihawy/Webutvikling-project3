import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import _ from "lodash";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const UserLogin = props => {
  const classes = useStyles();

  const { users, setLoggedInUser, createNewUser } = props;

  let history = useHistory();

  const [usernameText, setUsernameText] = useState("");
  

  const handleUsernameTextChange = e => {
    setUsernameText(e.target.value);
  };

  const handleSignInSubmit = () => {
    console.log("submit normal");
    if (users.map(user => user.username).indexOf(usernameText) > -1) {
      setLoggedInUser(_.find(users, user => user.username === usernameText));
      console.log(props);
      history.push("/");
    } else {
      alert(usernameText + " is not registered user");
    }
  };

  const EnterKey = e => {
    if (e.key === "Enter") {
      handleSignInSubmit(e);
    }
  };

  const handleCreateUserSubmit = () => {
    if (users.map(user => user.username).indexOf(usernameText) > -1) {
      alert("There is already a user with the username " + usernameText);
    } else if (usernameText.length < 4 || usernameText.length > 30) {
      alert("Please enter a username of appropriate length (4 - 30 letters)");
    } else {
      createNewUser(usernameText);
      alert("Created user " + usernameText);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onKeyDown={EnterKey}
          onChange={handleUsernameTextChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSignInSubmit}
        >
          Sign In
        </Button>
        or
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleCreateUserSubmit}
        >
          Create user
        </Button>
      </div>
    </Container>
  );
};

UserLogin.propTypes = {
  users: PropTypes.array,
  setLoggedInUser: PropTypes.func,
  createNewUser: PropTypes.func
};

export default UserLogin;
