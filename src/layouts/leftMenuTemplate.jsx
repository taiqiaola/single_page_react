import React from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import "./index.less";
import { Affix, Layout } from "antd";
import { getRedirectPath } from "@/common/js/utils";
import Footer from "@/layouts/footer";

const { Sider, Content } = Layout;

const RedirectTo404 = ({ location }) => <Redirect to={Object.assign({}, location, { state: { is404: true } })} />;

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
    <Layout className="leftMenuTemplateBox">
      <Sider className="leftMenuSider" width={160}>
        <Affix offsetTop={0}>
          <nav className="leftMenuBox">{leftMenu}</nav>
        </Affix>
      </Sider>
      <Content style={{ flex: 1 }}>
        <Switch>
          <Redirect exact from={match.path} to={`${match.path}${getRedirectPath(routerConfig)}`} />
          {rightContent}
          <Route component={RedirectTo404} />
        </Switch>
        <Footer />
      </Content>
    </Layout>
  );
}
