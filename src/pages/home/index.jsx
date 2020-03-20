import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, message, Empty } from "antd";
import { HeaderTemplate } from "@/layouts";
import { getTodoWoList, getLoginUser } from "@/service/common";
import { USER_SUCCESS, PAGESIZE } from "@/common/js/config";
import "./index.less";

class Home extends Component {
  state = {
    listData: {},
    currentName: "",
    tableLoading: false
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

  onPageChangeHandle(page) {
    this.queryTodoWoList(page);
  }

  render() {
    const { listData, currentName, tableLoading } = this.state;
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
        title: "当前步骤",
        dataIndex: "tacheName",
        key: "tacheName",
        width: "10%"
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
                <img alt="declareImg" src={item.img} />
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
            <Table
              columns={columns}
              loading={tableLoading || !listData}
              rowKey={record => record.itemNumber}
              dataSource={listData.list}
              locale={{
                emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              }}
              pagination={{
                size: "small",
                defaultCurrent: 1,
                current: listData.page,
                total: listData.total,
                pageSize: PAGESIZE,
                showQuickJumper: true,
                onChange: page => {
                  this.onPageChangeHandle(page);
                },
                showTotal: total => {
                  return `共${total}条`;
                }
              }}
            />
          ) : (
            <span>
              <Link to="/login">登录</Link> 后查看
            </span>
          )}
        </div>
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
