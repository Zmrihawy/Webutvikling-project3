import { GET_COMPONENTS } from "./types";

export const getComponents = () => dispatch => {
  return fetch("api/component")
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: GET_COMPONENTS,
        payload: (res ? res : [])
      });
    })
    .catch(err => {
      return dispatch({
        type: GET_COMPONENTS,
        payload: []
      })
    });
};
