import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import * as actions from "@/reduxs/action.js";
import "./index.less";

class LoginForWinPerson extends Component {
  onLogin = () => {
    this.props.setLoginState(true);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="loginForWinPersonBox">
        <div className="topBox">
          <Link className="logoAndName" to="/">
            <img alt="logo" className="systemLogo" src="/assets/svg/logo.svg" />
            <span className="systemName">这是一个系统名字</span>
          </Link>
          <Link className="backToHome" to="/">
            返回首页
          </Link>
        </div>
        <div className="formBox">
          <div className="txt">欢迎登录</div>
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
            <Form.Item name="username" rules={[{ required: true, message: "请输入账号" }]}>
              <Input placeholder="请输入账号" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="rememberMe">记住我</Checkbox>
              </Form.Item>
              <a className="forgot" href="">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" className="login-form-button" onClick={this.onLogin}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(LoginForWinPerson);
