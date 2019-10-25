import {
  GET_COMPONENT_STATISTICS,
  GET_USER_STATISTICS,
  GET_LOG_STATISTICS
} from "../actions/types"

const initialState = {
  statistics: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_COMPONENT_STATISTICS:
      return {
        ...state,
        statistics: action.payload
      };
    case GET_USER_STATISTICS:
      return {
        ...state,
        statistics: action.payload
      };
    case GET_LOG_STATISTICS:
      return {
        ...state,
        statistics: action.payload
      };
    default: 
      return state;
  }
}
