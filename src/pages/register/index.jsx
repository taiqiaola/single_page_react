import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.less";

class Register extends Component {
  render() {
    return (
      <div className="registerBox">
        <h1>这是注册页面啊</h1>
        <Link to="/login">回到登录</Link>
      </div>
    );
  }
}

export default Register;
