import {
  GET_COMPONENT_STATISTICS,
  GET_USER_STATISTICS,
  GET_LOG_STATISTICS
} from "./types";

/**
 * Statistics for components action creator
 */
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

/**
 * Statistics for user action creator
 */
export const getUserStatistics = () => dispatch => {
  console.log("in user statistics");
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

/**
 * Statistics for log (search queries and results) action creator
 */
export const getLogStatistics = () => dispatch => {
  console.log("in user statistics");
  return fetch("api/log/statistics")
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: GET_LOG_STATISTICS,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
