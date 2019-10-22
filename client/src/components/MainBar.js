import React, { Component } from "react";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./NavBar";
import { connect } from "react-redux";

class MainBar extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy
              variant="subtitle1"
              color="inherit"
              style={{
                paddingRight: "1.5em",
                marginRight: "1em",
                borderRight: "0.05em solid rgba(255, 255, 255, 0.5)"
              }}
            >
              LOGO
            </TypoGraphy>

            <NavBar loggedInUser={loggedInUser} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


MainBar.propTypes = {
  loggedInUser: PropTypes.shape({
    username: PropTypes.string,
    shoppingBasket: PropTypes.array
  })
}

// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { user } = state;
  return { loggedInUser: user.loggedInUser };
}


export default connect(
  mapStateToProps,
  {}
)(MainBar);
