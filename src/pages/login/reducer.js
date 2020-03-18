import * as TYPE from "./constant";

//
export const loginState = (state = false, action) => {
  switch (action.type) {
    case TYPE.SETLOGINSTATE:
      return action.data;
    default:
      return state;
  }
};
