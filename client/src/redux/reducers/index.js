import { combineReducers } from 'redux';
import componentReducer from './componentReducer';

const appReducer = combineReducers({
  component: componentReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
