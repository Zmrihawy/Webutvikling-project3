import React, { Component } from "react";
import { connect } from 'react-redux';


class ShoppingCartPage extends Component {


  render() {
    
    // This works because loggedInUser is populated by redux
    const { loggedInUser } = this.props;

    return <div>Hello from ShoppingCartPage</div>;
  }
}


// This is the actual readonly redux state
// We need to logginUserState, so we extract it
function mapStateToProps(state) {
  const { user } = state;
  return { loggedInuser: user.loggedInUser };
}

// These represents functions for changing redux state
// currently commented out, but we will need them later
const actionCreators = {
  // setLoggedInUser,
  // createNewUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(ShoppingCartPage);
