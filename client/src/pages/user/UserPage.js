import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import ParticleComponent from "../mainPage/ParticleComponent"

import {
  getUsers,
  setLoggedInUser,
  createNewUser
} from "../../redux/actions/userActions";

import UserLogin from "../../pages/user/UserLogin";

const UserPage = props => {
  const { users, getUsers, setLoggedInUser, createNewUser } = props;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 0,
            width: "100%",
            height: "100%"
          }}
      >
        <ParticleComponent/>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
      <UserLogin
        users={users}
        setLoggedInUser={setLoggedInUser}
        createNewUser={createNewUser}
      />
          </div>
        </div>
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
