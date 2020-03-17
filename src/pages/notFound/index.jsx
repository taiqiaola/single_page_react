import React, { Component } from "react";
import "./index.less";
import { Button } from "antd";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

class NotFound extends Component {
  goHome = () => {};

  render() {
    const { type } = this.props;

    return (
      <div className="notFoundBox">
        <div className="noFindImg">
          {type === "404" && <img src="/assets/image/notFound/404.png" />}
          {(type === "403" || type == "440") && <img src="/assets/image/notFound/403.png" />}
          {type === "500" && <img src="/assets/image/notFound/500.png" />}
        </div>
        {type === "404" && (
          <div className="noFindDetail">
            <p className="noFindCode">404</p>
            <p className="noFindTxt">抱歉，您访问的页面不存在</p>
            <Button type="primary" onClick={this.goHome}>
              <Link to="/">返回首页</Link>
            </Button>
          </div>
        )}
        {type === "403" && (
          <div className="noFindDetail">
            <p className="noFindCode">403</p>
            <p className="noFindTxt">抱歉，您无权访问该页面</p>
            <Button type="primary" onClick={this.goHome}>
              <Link to="/">返回首页</Link>
            </Button>
          </div>
        )}
        {type === "500" && (
          <div className="noFindDetail">
            <p className="noFindCode">500</p>
            <p className="noFindTxt">抱歉，服务器出错了</p>
            <Button type="primary" onClick={this.goHome}>
              <Link to="/">返回首页</Link>
            </Button>
          </div>
        )}
        {type === "440" && (
          <div className="noFindDetail">
            <p className="noFindCode">440</p>
            <p className="noFindTxt">抱歉，您无权访问该系统</p>
          </div>
        )}
      </div>
    );
  }
}

export default NotFound;
