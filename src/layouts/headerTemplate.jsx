import React from "react";
import "./index.less";
import Header from "./header";
import Footer from "@/layouts/footer";

export default function HeaderTemplate(props) {
  const { noOtherStyle, hasLeft = false } = props;

  return (
    <div className="headerTemplateBox">
      <Header {...{ noOtherStyle }} />
      {props.children}
      {!hasLeft && <Footer />}
    </div>
  );
}
