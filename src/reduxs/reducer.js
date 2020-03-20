import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as TYPE from "./constant";

//
export const loginState = (state = true, action) => {
  switch (action.type) {
    case TYPE.SETLOGINSTATE:
      return action.data;
    default:
      return state;
  }
};

const allReducer = combineReducers({
  router: routerReducer,
  loginState
});

export default allReducer;
