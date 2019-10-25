import { GET_USERS, SET_LOGGED_IN_USER } from "./types";

const fetchUsers = dispatch => {
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

export const getUsers = () => dispatch => {
  return fetchUsers(dispatch);
};

export const setLoggedInUser = user => dispatch => {
  return dispatch({
    type: SET_LOGGED_IN_USER,
    payload: user
  });
};

export const addComponentToShoppingCart = (user, component) => dispatch => {
  if (user.shoppingCart.length >= 40) {
    alert("Shopping cart limit reached (40). Please remove some items");
    return;
  }
  return fetch("/api/user/" + user._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ shoppingCart: [...user.shoppingCart, component] })
  })
    .then(res => res.json())
    .then(res => {
      return fetch("/api/user")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: GET_USERS,
            payload: res ? res : []
          });
          const updatedUser = res.find(_user => _user._id === user._id);
          return dispatch({
            type: SET_LOGGED_IN_USER,
            payload: updatedUser
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

export const removeComponentFromShoppingCart = (user, component) => dispatch => {
  const { shoppingCart } = user
  const index = shoppingCart.map(item => item._id).indexOf(component._id)
  if (index === -1){
    return
  }
  shoppingCart.splice(index, 1)
  return fetch("/api/user/" + user._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ shoppingCart })
  })
    .then(res => res.json())
    .then(res => {
      return fetch("/api/user")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: GET_USERS,
            payload: res ? res : []
          });
          const updatedUser = res.find(_user => _user._id === user._id);
          return dispatch({
            type: SET_LOGGED_IN_USER,
            payload: updatedUser
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

export const createNewUser = username => dispatch => {
  return fetch("api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username })
  })
    .then(res => res.json())
    .then(() => {
      return fetchUsers(dispatch);
    });
};


