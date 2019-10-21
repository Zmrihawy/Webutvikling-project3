import { GET_USERS, SET_LOGGED_IN_USER } from "../actions/types";

const initialState = {
  users: [],
  loggedInUser: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload
      }
    default:
      return state;
  }
}
