import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const allReducer = combineReducers({
  router: routerReducer
});

export default allReducer;
