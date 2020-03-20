import React from "react";
import "./index.less";
import Header from "./header";

const Footer = () => <div className="footerBox">省ICP备 05952902号-1 省公网安备 449041485291号 网站标识码 440192489123</div>;

export default function HeaderTemplate(props) {
  const { noOtherStyle } = props;

  return (
    <div className="headerTemplateBox">
      <Header {...{ noOtherStyle }} />
      {props.children}
      <Footer />
    </div>
  );
}
