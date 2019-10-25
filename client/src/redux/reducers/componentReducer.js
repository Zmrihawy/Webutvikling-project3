import {
  GET_PAGINATION_COMPONENTS,
  GET_FEATURED_COMPONENTS,
  GET_CURRENT_COMPONENT
  // GET_COMPONENT_STATISTICS
} from "../actions/types";

const initialState = {
  paginationComponents: {
    components: [],
    paginationMetaData: {}
  },
  featuredComponents: [],
  currentComponent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload
      };
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
