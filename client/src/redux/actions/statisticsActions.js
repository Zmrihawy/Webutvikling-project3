import { GET_COMPONENT_STATISTICS, GET_USER_STATISTICS } from "./types"

export const getComponentStatistics = () => dispatch => {
  return fetch("api/component/statistics")
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: GET_COMPONENT_STATISTICS,
        payload: res
      });
    })
    .catch(err => console.log(err));
};

export const getUserStatistics = () => dispatch => {
  console.log("in user statistics")
  return fetch("api/user/statistics")
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: GET_USER_STATISTICS,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
