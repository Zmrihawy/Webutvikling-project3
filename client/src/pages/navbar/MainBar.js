import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MainBar extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <AppBar color="primary" position="static" style={{zIndex: 5}}>
          <Toolbar >
            <TypoGraphy
              variant="subtitle1"
              color="inherit"
              style={{
                paddingRight: "1.5em",
                marginRight: "1em",
                borderRight: "0.05em solid rgba(255, 255, 255, 0.5)"
              }}
            >
              <Link to={"/"} style={{ textDecoration: "none"}}>
                 <p style={{fontSize: "20px",
                     color: "white",
                     display: "block",
                     height: "30px",
                     width: "30px"}}> EC </p>
              </Link>
            </TypoGraphy>

            <NavBar loggedInUser={loggedInUser} />
          </Toolbar>
        </AppBar>
    );
  }
}

MainBar.propTypes = {
  loggedInUser: PropTypes.shape({
    username: PropTypes.string,
    shoppingCart: PropTypes.array
  })
};

// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { user } = state;
  return { loggedInUser: user.loggedInUser };
}

export default connect(
  mapStateToProps,
  {}
)(MainBar);
