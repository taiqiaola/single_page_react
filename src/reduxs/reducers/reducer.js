import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { LoginReducer } from "@/pages/login";

const allReducer = combineReducers({
  router: routerReducer,
  ...LoginReducer
});

export default allReducer;
