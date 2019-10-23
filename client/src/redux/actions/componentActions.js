import { GET_PAGINATION_COMPONENTS, GET_FEATURED_COMPONENTS } from "./types";


const createQueryFromParams = (queryParams) => {
  const { filterVal, filterField, nameSearch, sortBy, pageNum, objectsPerPage, isAsc } = queryParams;
  return (filterVal ? "filterVal=" + filterVal + "&" : "" ) + (nameSearch ? "nameSearch=" + nameSearch + "&" : "")
  + (filterField ? "filterField=" + filterField  + "&" : "" ) + (sortBy ? "sortBy=" + sortBy : "" )
      + ( pageNum ? "pageNum=" + pageNum : "") + ( objectsPerPage ? "objectsPerPage=" + objectsPerPage : "")
      + (sortBy ? "sortBy=" + sortBy : "") + (isAsc ? "isAcc=" + isAsc : "");
}

  

export const getPaginationComponents = (queryParams) => dispatch => {
  queryParams = queryParams ? queryParams : {};
  let query = createQueryFromParams(queryParams);
  return fetch("api/component/pagination?" + query)
    .then(res => res.json())
    .then(res => {
      const { pageNum, totPages, totObjects, objectsPerPage, components } = res;
      let paginationComponents = {
        paginationMetaData: {
            queryParams,
            pageNum,
            totPages,
            totObjects,
            objectsPerPage
        },
        components
      }
      return dispatch({
        type: GET_PAGINATION_COMPONENTS,
        payload: paginationComponents
      });
    })
    .catch(err => console.log(err));
};


export const getFeaturedComponents = () => dispatch => {
  return fetch("api/component/featuredComponents")
    .then(res => res.json())
    .then(res => {
      return dispatch({
        type: GET_FEATURED_COMPONENTS,
        payload: res
      });
    })
    .catch(err => console.log(err))
}
