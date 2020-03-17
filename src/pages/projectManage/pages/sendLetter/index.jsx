import React, { Component } from "react";
import { getTodoWoList, getLoginUser } from "@/service/common";
import "./index.less";

class SendLetter extends Component {
  state = {
    data: [],
    currentName: ""
  };

  componentDidMount() {
    const param = {
      page: 1,
      pageSize: 10
    };
    getTodoWoList(param).then(res => {
      this.setState({
        data: res.value.list
      });
    });

    getLoginUser().then(res => {
      this.setState({
        currentName: res.data.loginName
      });
    });
  }

  render() {
    const { data, currentName } = this.state;

    return (
      <div className="sendLetterBox">
        <h1>你好，{currentName}！</h1>
        {data.map(item => (
          <h1 key={item.itemNumber}>{item.itemNumber}</h1>
        ))}
      </div>
    );
  }
}

export default SendLetter;
