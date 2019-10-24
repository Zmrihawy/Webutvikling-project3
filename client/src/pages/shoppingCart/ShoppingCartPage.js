import React, { Component } from "react";
import { connect } from 'react-redux';
import {item} from '../item/Item'

class ShoppingCartPage extends Component {


  render() {
    
    // This works because loggedInUser is populated by redux
    const { loggedInUser } = this.props;
    
    let mappedItems;
    if (loggedInUser && JSON.stringify(loggedInUser) !== JSON.stringify({}) && loggedInUser.shoppingCart){
        console.log("mapping items")
        mappedItems = loggedInUser.shoppingCart.map(item => {
            console.log(`mapping item ${item}`)
            return <div>{item}</div>
        });
    }
    


    return <div>{mappedItems }</div>;
  }
}


// This is the actual readonly redux state
// We need to logginUserState, so we extract it
function mapStateToProps(state) {
  const { user } = state;
  return { loggedInUser: user.loggedInUser };
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
