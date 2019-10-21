import { GET_COMPONENTS, GET_FEATURED_COMPONENTS } from "../actions/types";

const initialState = {
  components: [],
  featuredComponents: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPONENTS:
      return {
        ...state,
        components: action.payload
      };
    case GET_FEATURED_COMPONENTS:
      return {
        ...state,
        featuredComponents: action.payload
      }
    default:
      return state;
  }
}
