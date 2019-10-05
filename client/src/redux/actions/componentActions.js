import { GET_COMPONENTS } from './types';


export const getComponents = () => dispatch => {
  return fetch('api/component')
    .then(res => {
      return dispatch({
        type: GET_COMPONENTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
