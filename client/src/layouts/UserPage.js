import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";

import { getUsers } from "../redux/actions/userActions";


const UserPage = (props) => {

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  return (
    <div>
      Hello from user page
    </div>
  )
}


// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { user } = state;
  return { users: user.users };
}

const actionCreators = {
  getUsers
};

export default connect(
  mapStateToProps,
  actionCreators
)(UserPage);
