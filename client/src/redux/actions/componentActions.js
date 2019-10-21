import { GET_COMPONENTS } from "./types";

export const getComponents = (filterVal, filterField, sortBy, pageNum, objectsPerPage, isAsc,) => dispatch => {

  let query = (filterVal ? "filterVal=" + filterVal + "&" : "" )
  + (filterField ? "filterField=" + filterField  + "&" : "" ) + (sortBy ? "sortBy=" + sortBy : "" )
      + ( pageNum ? "pageNum=" + pageNum : "") + ( objectsPerPage ? "objectsPerPage=" + objectsPerPage : "")
      + (sortBy ? "sortBy=" + sortBy : "") + (isAsc ? "isAcc=" + isAsc : "");

  return fetch("api/component/pagination/" + query)
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
