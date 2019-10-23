import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";

import {
  getUsers,
  setLoggedInUser,
  createNewUser
} from "../../redux/actions/userActions";

import UserLogin from "../user/UserLogin";

const UserPage = props => {
  const { users, getUsers, setLoggedInUser, createNewUser } = props;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <UserLogin
        users={users}
        setLoggedInUser={setLoggedInUser}
        createNewUser={createNewUser}
      />
    </div>
  );
};

UserPage.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  setLoggedInUser: PropTypes.func,
  createNewUser: PropTypes.func
};

// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { user } = state;
  return { users: user.users };
}

const actionCreators = {
  getUsers,
  setLoggedInUser,
  createNewUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(UserPage);
