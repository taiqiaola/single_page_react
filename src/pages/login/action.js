import * as TYPE from "./constant";
export { push } from "react-router-redux";

//
export const setLoginState = data => ({
  type: TYPE.SETLOGINSTATE,
  data
});
