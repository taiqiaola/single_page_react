/**
 *  菜单栏
 */
import React, { Component } from "react";
import "./index.less";
import { NavLink, Link } from "react-router-dom";
import { menuConfig } from "@/common/js/menu";
import { Divider } from "antd";
import classNames from "classnames";

function Header(props) {
  const cls = classNames({
    headerBox: true,
    otherHeaderBox: !props.notLoadOtherStyle
  });
  return (
    <div className={cls}>
      <div className="headerTop">
        <div className="logoAndNameBox">
          <img alt="logo" className="systemLogo" src="/assets/svg/logo.svg" />
          <span className="systemName">这是一个系统名字</span>
        </div>
        <div className="loginAndRegister">
          <Link to="/login">登录</Link>
          <Divider type="vertical" />
          <Link to="/register">注册</Link>
        </div>
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

export default Header;
