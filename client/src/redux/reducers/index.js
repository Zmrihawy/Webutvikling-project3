import { combineReducers } from "redux";
import componentReducer from "./componentReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
  component: componentReducer,
  user: userReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
