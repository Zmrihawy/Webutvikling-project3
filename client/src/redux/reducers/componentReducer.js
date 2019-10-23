import {
  GET_PAGINATION_COMPONENTS,
  GET_FEATURED_COMPONENTS
} from "../actions/types";

const initialState = {
  paginationComponents: {
    components: [],
    paginationMetaData: {}
  },
  featuredComponents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAGINATION_COMPONENTS:
      return {
        ...state,
        paginationComponents: action.payload
      };
    case GET_FEATURED_COMPONENTS:
      return {
        ...state,
        featuredComponents: action.payload
      };
    default:
      return state;
  }
}
