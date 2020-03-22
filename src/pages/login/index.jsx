import React, { Component } from "react";
import LoginForConstrUnit from "./constrUnit";
import LoginForWinPerson from "./winPerson";
import "./index.less";

export default class Login extends Component {
  render() {
    return true ? <LoginForConstrUnit {...this.props} /> : <LoginForWinPerson {...this.props} />;
  }
}
