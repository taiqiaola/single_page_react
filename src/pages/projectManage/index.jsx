import React, { Component } from "react";
import { routerConfig } from "./router/router";
import { Template, Header } from "@/layouts";
import "./index.less";

class ProjectManage extends Component {
  render() {
    return (
      <div className="projectManageBox">
        <Header />
        <Template routerConfig={routerConfig} {...this.props} />
      </div>
    );
  }
}

export default ProjectManage;
