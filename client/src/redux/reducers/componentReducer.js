import { GET_COMPONENTS } from "../actions/types";

const initialState = {
  components: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPONENTS:
      console.log("setting components in reducer");
      console.log(action.payload);
      return {
        ...state,
        components: action.payload
      };
    default:
      return state;
  }
}
