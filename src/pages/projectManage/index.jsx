import React, { Component } from "react";
import { routerConfig } from "./router/router";
import { LeftMenuTemplate, HeaderTemplate } from "@/layouts";
import "./index.less";

class ProjectManage extends Component {
  render() {
    return (
      <HeaderTemplate hasLeft={true}>
        <LeftMenuTemplate routerConfig={routerConfig} {...this.props} />
      </HeaderTemplate>
    );
  }
}

export default ProjectManage;
