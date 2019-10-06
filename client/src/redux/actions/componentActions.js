import { GET_COMPONENTS } from "./types";

export const getComponents = () => dispatch => {
  console.log("getting components");
  return fetch("api/component")
    .then(res => res.json())
    .then(res => {
      console.log("fetch result")
      console.log(res);
      return dispatch({
        type: GET_COMPONENTS,
        payload: (res ? res : [])
      });
    })
    .catch(err => {
      console.log(err)
      return dispatch({
        type: GET_COMPONENTS,
        payload: []
      })
    });
};
