import React, { Component } from "react";
import "@/common/css/global.less";
import "./App.less";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { routerConfig } from "./router/router";
import { NotFound } from "@/pages";
import { getRedirectPath } from "@/common/js/utils";
import { hot } from "react-hot-loader/root";

class App extends Component {
  render() {
    return (
      <div className="appBox">
        <Router>
          <Switch>
            <Redirect exact from="/" to={getRedirectPath(routerConfig)} />
            {routerConfig.map(item => {
              const { component: RouteComponent, path } = item;
              return <Route key={path} path={path} render={props => <RouteComponent {...props} />} />;
            })}
            <Route render={() => <NotFound type="404" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const HOCApp = module.hot ? hot(App) : App;

export default HOCApp;
