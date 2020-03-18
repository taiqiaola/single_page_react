import React from "react";
import "./index.less";
import Header from "./header";

export default function HeaderTemplate(props) {
  const { noOtherStyle } = props;

  return (
    <div className="headerTemplateBox">
      <Header {...{ noOtherStyle }} />
      {props.children}
    </div>
  );
}
