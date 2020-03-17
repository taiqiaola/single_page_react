import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "./index.less";
import { Header } from "@/layouts";

class Home extends Component {
  render() {
    return (
      <div className="homeBox">
        <Header notLoadOtherStyle={true} />
        <div className="declareBox">
          <div className="declareTopBox">
            <div className="grad1"></div>
            <div className="txt">我要申报</div>
            <div className="grad2"></div>
          </div>
        </div>
        <div className="myDeclarebox">
          <div className="myDeclareTopBox">
            <div className="grad1"></div>
            <div className="txt">我的申报</div>
            <div className="grad2"></div>
          </div>
          <div>
            <Link to="/login">登录</Link> 后查看
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
