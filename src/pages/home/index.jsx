import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Tabs, message, Button, Modal } from "antd";
import { HeaderTemplate } from "@/layouts";
import { getTodoWoList, getLoginUser } from "@/service/common";
import { USER_SUCCESS, PAGESIZE } from "@/common/js/config";
import { GlobalTable } from "@/pages/components";
import { PlusOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./index.less";

const { TabPane } = Tabs;

class Home extends Component {
  state = {
    listData: {},
    currentName: "",
    updateState: false,
    tableLoading: false,
    tabActivelKey: "proInfo",
    lookHistoryVisible: false
  };

  UNSAFE_componentWillMount() {
    this.queryTodoWoList();

    getLoginUser().then(res => {
      this.setState({
        currentName: res.data.loginName
      });
    });
  }

  queryTodoWoList(page = 1) {
    this.setState({
      tableLoading: true
    });

    const param = {
      page,
      pageSize: PAGESIZE
    };
    getTodoWoList(param).then(res => {
      if (res.resultStat === USER_SUCCESS) {
        this.setState({
          listData: res.value
        });
      } else {
        message.error(res.mess);
      }
      this.setState({
        tableLoading: false
      });
    });
  }

  onPageChangeHandle = page => {
    this.queryTodoWoList(page);
  };

  onSearchHandle = () => {};

  onAddHandle = () => {};

  onLookHistoryHandle = () => {
    this.setState({
      lookHistoryVisible: true
    });
  };

  onModalCancleHandle = () => {
    this.setState({
      updateState: false,
      tabActivelKey: "proInfo",
      lookHistoryVisible: false
    });
  };

  onUpdateHandle = () => {
    this.setState({
      updateState: true
    });
  };

  onTabChangeHandle = key => {
    this.setState({
      tabActivelKey: key
    });
  };

  onBackHandle = () => {
    this.setState({
      updateState: false
    });
  };

  render() {
    const { listData, currentName, tableLoading, lookHistoryVisible, updateState, tabActivelKey } = this.state;
    const { loginState } = this.props;

    const columns = [
      {
        title: "事项编码",
        dataIndex: "itemNumber",
        key: "itemNumber",
        width: "15%"
      },
      {
        title: "项目编号",
        dataIndex: "projectCode",
        key: "projectCode",
        width: "20%"
      },
      {
        title: "项目名称",
        dataIndex: "projectName",
        key: "projectName",
        width: "15%"
      },
      {
        title: "申报事项",
        dataIndex: "itemName",
        key: "itemName",
        width: "20%"
      },
      {
        title: "申报单位",
        dataIndex: "applyUnitName",
        key: "applyUnitName",
        width: "20%"
      },
      {
        title: "历史版本",
        key: "action",
        width: "10%",
        render: (text, record) => <a onClick={this.onLookHistoryHandle}>查看</a>
      }
    ];

    const wantDeclareMenu = [
      {
        name: "立项用地规划许可阶段",
        img: "/assets/image/lxyd.png",
        key: "lxyd",
        children: [
          { name: "政府投资项目", key: "zf" },
          { name: "社会投资项目", key: "sh" }
        ]
      },
      {
        name: "工程建设许可阶段",
        img: "/assets/image/gcjs.png",
        key: "gcjs",
        children: [
          { name: "政府投资项目", key: "zf" },
          { name: "社会投资项目", key: "sh" }
        ]
      },
      {
        name: "施工许可阶段",
        img: "/assets/image/sg.png",
        key: "sg",
        children: [
          { name: "政府投资项目", key: "zf" },
          { name: "社会投资项目", key: "sh" }
        ]
      },
      {
        name: "竣工验收阶段",
        img: "/assets/image/jg.png",
        key: "jg",
        children: [
          { name: "政府投资项目", key: "zf" },
          { name: "社会投资项目", key: "sh" }
        ]
      }
    ];

    const cls = classNames({
      modalTitleForTabs: updateState
    });

    return (
      <HeaderTemplate noOtherStyle={true}>
        <div className="wantDeclareBox">
          <div className="wantDeclareTopBox">
            <div className="grad1"></div>
            <div className="txt">我要申报</div>
            <div className="grad2"></div>
          </div>
          <div className="wantDeclareArea">
            {wantDeclareMenu.map(item => (
              <div key={item.key} className="declareCard">
                <div className="declareImg" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="declareCardTxt">
                  <p>{item.name}</p>
                  <div className="preTxt">
                    {item.children.map(i => (
                      <Link key={`${item.key}_${i.key}`} to="/">
                        {i.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="myDeclarebox">
          <div className="myDeclareTopBox">
            <div className="grad1"></div>
            <div className="txt">我的申报</div>
            <div className="grad2"></div>
          </div>
          {loginState ? (
            <GlobalTable
              columns={columns}
              tableData={listData}
              tableLoading={tableLoading}
              onSearch={this.onSearchHandle}
              onPageChange={this.onPageChangeHandle}
              // extraFunc={
              //   <Button type="primary" icon={<PlusOutlined />} onClick={this.onAddHandle}>
              //     新建项目
              //   </Button>
              // }
            />
          ) : (
            <span>
              <Link to="/login">登录</Link> 后查看
            </span>
          )}
        </div>

        <Modal
          title={
            updateState ? (
              <Tabs animated={false} activeKey={tabActivelKey} onChange={this.onTabChangeHandle}>
                <TabPane tab="项目信息" key="proInfo" />
                <TabPane tab="附件资料" key="fileInfo" />
              </Tabs>
            ) : (
              "历史版本"
            )
          }
          width={1200}
          wrapClassName={cls}
          maskClosable={false}
          visible={lookHistoryVisible}
          onCancel={this.onModalCancleHandle}
          footer={
            updateState
              ? [
                  <Button key="close" onClick={this.onModalCancleHandle}>
                    关闭
                  </Button>,
                  <Button key="back" type="primary" onClick={this.onBackHandle}>
                    返回
                  </Button>
                ]
              : [
                  <Button key="close" onClick={this.onModalCancleHandle}>
                    关闭
                  </Button>,
                  <Button key="update" type="primary" onClick={this.onUpdateHandle}>
                    修改
                  </Button>
                ]
          }
        >
          {updateState ? (tabActivelKey === "proInfo" ? "proInfo" : "fileInfo") : "history"}
        </Modal>
      </HeaderTemplate>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(mapStateToProps, null)(Home);
