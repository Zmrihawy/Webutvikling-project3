import { GET_COMPONENTS } from '../actions/types';


const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPONENTS:
      return {
        ...state,
        components: action.payload
      };
    default:
      return state;
  }
}

