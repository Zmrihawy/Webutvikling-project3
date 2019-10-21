import { GET_COMPONENTS } from "./types";

export const getComponents = (queryParams) => dispatch => {
    queryParams = queryParams ? queryParams : {};
    console.log(queryParams);
  const { filterVal, filterField, sortBy, pageNum, objectsPerPage, isAsc } = queryParams;

  let query = (filterVal ? "filterVal=" + filterVal + "&" : "" )
  + (filterField ? "filterField=" + filterField  + "&" : "" ) + (sortBy ? "sortBy=" + sortBy : "" )
      + ( pageNum ? "pageNum=" + pageNum : "") + ( objectsPerPage ? "objectsPerPage=" + objectsPerPage : "")
      + (sortBy ? "sortBy=" + sortBy : "") + (isAsc ? "isAcc=" + isAsc : "");

 console.log(query);

  return fetch("api/component/pagination?" + query)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        res = res.components;
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
