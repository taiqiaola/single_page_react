import React, { Component } from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from "history";
import "@/common/css/global.less";
import "./index.less";
import Template from "./template";
import Header from "./header";

// const history = createBrowserHistory();

// const getRootRedirect = data => {
//   let targetRedirect = "";
//   for (let key in data) {
//     if (data[key].isFirstRoute) {
//       targetRedirect = key;
//     }
//   }
//   return targetRedirect;
// };

// class BasicLayout extends Component {
//   getRouteHTML = data => {
//     return Object.keys(data).map(key => {
//       const RouteComponent = data[key].component;

//       return <Route key={key} exact path={key} render={props => <RouteComponent {...props} />} />;
//     });
//   };

//   render() {
//     const { routerConfig } = this.props;

//     return (
//       <Router history={history}>
//         <section>
//           <Switch>
//             <Redirect exact from="/" to={getRootRedirect(routerConfig)} />
//             {this.getRouteHTML(routerConfig)}
//           </Switch>
//         </section>
//       </Router>
//     );
//   }
// }

// export default BasicLayout;

export { Template, Header };
