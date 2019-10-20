import { GET_COMPONENTS } from "./types";

export const getComponents = () => dispatch => {
  return fetch("api/component")
    .then(res => res.json())
    .then(res => {
      if (Array.isArray(res)) {
        return dispatch({
          type: GET_COMPONENTS,
          payload: res ? res : []
        });
      }
      console.log(
        "Error: components object was not an array, setting components to empty array and printing components, please inspect:"
      );
      console.log(res);
      return dispatch({
        type: GET_COMPONENTS,
        payload: []
      });
    })
    .catch(err => {
      console.log(err);
      return dispatch({
        type: GET_COMPONENTS,
        payload: []
      });
    });
};
