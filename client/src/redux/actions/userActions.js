import { GET_USERS, SET_LOGGED_IN_USER } from "./types";

export const getUsers = () => dispatch => {
  return fetch("api/user")
    .then(res => res.json())
    .then(res => {
        return dispatch({
          type: GET_USERS,
          payload: res ? res : []
        });
    })
    .catch(err => console.log(err));
};

export const setLoggedInUser = (user) => dispatch => {
  return dispatch({
    type: SET_LOGGED_IN_USER,
    paload: user
  })
}

