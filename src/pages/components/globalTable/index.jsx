import React, { Component } from "react";
import { Table, Empty, input, Button, Icon } from "antd";
import { PAGESIZE } from "@/common/js/config";
import "./index.less";

const { Search } = input;

class GlobalTable extends Component {
  render() {
    const { tableData, tableLoading, columns } = this.props;

    return (
      <div className="globalTable">
        <div className="globalTopBox">
          <Search enterButton placeholder="请输入项目名称、工程代码进行查询" onSearch={this.props.onSearch} />
          {this.props.extraFunc || null}
        </div>
        <Table
          columns={columns}
          loading={tableLoading || !tableData}
          rowKey={record => record.itemNumber}
          dataSource={tableData.list}
          locale={{
            emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          }}
          pagination={{
            size: "small",
            defaultCurrent: 1,
            current: tableData.page,
            total: tableData.total,
            pageSize: PAGESIZE,
            showQuickJumper: true,
            onChange: page => {
              this.props.onPageChange(page);
            },
            showTotal: total => {
              return `共${total}条`;
            }
          }}
        />
      </div>
    );
  }
}

export default GlobalTable;
