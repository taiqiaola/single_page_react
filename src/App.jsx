import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routerConfig } from "./router/router";
import { Spin } from "antd";
import { NotFound } from "@/pages";
import { getRedirectPath } from "@/common/js/utils";
import { hot } from "react-hot-loader/root";
import "@/common/css/global.less";
import "./App.less";

class AppRoutes extends Component {
  state = {
    loading: true
  };

  timer = null;

  componentDidMount() {
    if (["/login", "/register"].indexOf(this.props.location.pathname) < 0) {
      this.loadingShow();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname && ["/login", "/register"].indexOf(nextProps.location.pathname) < 0) {
      window.scrollTo(0, 0);
      this.loadingShow();
    }
  }

  loadingShow() {
    this.setState(
      {
        loading: true
      },
      () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    );
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <Switch>
          <Redirect exact from="/" to={getRedirectPath(routerConfig)} />
          {routerConfig.map(item => {
            const { component: RouteComponent, path } = item;
            return <Route key={path} path={path} render={props => <RouteComponent {...props} />} />;
          })}
          <Route render={() => <NotFound type="404" />} />
        </Switch>
      </Spin>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="appBox">
        <BrowserRouter>
          <Route render={props => (props.location.state && props.location.state.is404 ? <NotFound type="404" /> : <AppRoutes {...props} />)} />
        </BrowserRouter>
      </div>
    );
  }
}

const HOCApp = module.hot ? hot(App) : App;

export default HOCApp;
