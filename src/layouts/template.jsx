import React from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import "./index.less";
import { Affix } from "antd";
import { getRedirectPath } from "@/common/js/utils";

export default function Template(props) {
  const { match, routerConfig } = props;
  const [leftMenu, rightContent] = [[], []];

  for (let item of routerConfig) {
    const { component: RouteComponent, path, name } = item;
    leftMenu.push(
      <NavLink key={path} className="preMenu" to={`${match.path}${path}`} activeClassName="selectedStyle">
        {name}
      </NavLink>
    );
    rightContent.push(<Route key={path} path={`${match.path}${path}`} render={props => <RouteComponent {...props} />} />);
  }

  return (
    <div className="page">
      <Affix offsetTop={0}>
        <nav className="leftMenuBox">{leftMenu}</nav>
      </Affix>
      <Switch>
        <Redirect exact from={match.path} to={`${match.path}${getRedirectPath(routerConfig)}`} />
        {rightContent}
      </Switch>
    </div>
  );
}
