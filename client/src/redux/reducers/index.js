import { combineReducers } from "redux";
import componentReducer from "./componentReducer";
import userReducer from "./userReducer";
import statisticsReducer from "./statisticsReducer";

const appReducer = combineReducers({
  component: componentReducer,
  user: userReducer,
  statistics: statisticsReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
