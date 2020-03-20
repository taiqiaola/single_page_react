/**
 *  菜单栏
 */
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";
import { Divider, Dropdown, Menu } from "antd";
import { menuConfig } from "@/common/js/menu";
import * as actions from "@/reduxs/action.js";
import "./index.less";

class Header extends Component {
  onLogOut = () => {
    this.props.setLoginState(false);
  };

  render() {
    const LoginAndRegister = () => (
      <div className="loginAndRegisterBox">
        <Link to="/login">登录</Link>
        <Divider type="vertical" />
        <Link to="/register">注册</Link>
      </div>
    );

    const UserInfo = () => (
      <div className="userInfoBox">
        <Dropdown overlay={userMenu}>
          <img alt="logo" className="userImg" src="/assets/image/userimg.png" />
        </Dropdown>
        你好，王晓旭
      </div>
    );

    const userMenu = (
      <Menu>
        <Menu.Item key="personalInfo">
          <a href="http://www.alipay.com/">个人信息</a>
        </Menu.Item>
        <Menu.Item key="setting">
          <a href="http://www.taobao.com/">设置</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={this.onLogOut}>
          退出登录
        </Menu.Item>
      </Menu>
    );

    const cls = classNames({
      headerBox: true,
      otherHeaderBox: !this.props.noOtherStyle
    });

    return (
      <div className={cls}>
        <div className="headerTop">
          <Link className="logoAndNameBox" to="/">
            <img alt="logo" className="systemLogo" src="/assets/svg/logo.svg" />
            <span className="systemName">这是一个系统名字</span>
          </Link>
          {this.props.loginState ? <UserInfo /> : <LoginAndRegister />}
        </div>

        <nav className="headerMenu">
          {menuConfig.map(item => (
            <NavLink className="preMenu" key={item.path} to={item.path} activeClassName="selectedStyle">
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(mapStateToProps, actions)(Header);
