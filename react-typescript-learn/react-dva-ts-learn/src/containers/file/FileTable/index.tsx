import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Table, Divider, Tag } from 'antd';

import { GlobalState } from '../../../typings';
import { NAMESPACE } from '../../../models/file/constants';
import { getFileState } from '../../../models/file';

const mapStateToProps = (state: GlobalState) => getFileState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExcelInfo() {
    dispatch({ type: `${NAMESPACE}/getExcelInfo` });
  },
});

interface FileTableProps {
  recordList: [];
  getExcelInfo: () => void;
}

interface FileTableRecord {
  iccid: string;
  operators: string;
  receiver: string;
  phone: string;
  address: string;
}

class FileTable extends Component<FileTableProps, {}> {
  public componentDidMount() {
    this.props.getExcelInfo();
  }

  public render() {
    const columns = [
      {
        title: 'SIM卡卡号',
        dataIndex: 'iccid',
        key: 'iccid',
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: '运营商',
        dataIndex: 'operators',
        key: 'operators',
      },
      {
        title: '收货人',
        dataIndex: 'receiver',
        key: 'receiver',
      },
      {
        title: '收货地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[] = ['xiha']) => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text: string, record: FileTableRecord) => (
          <span>
            <a>Invite</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    console.log('this.props ', this.props);
    const { recordList = [] } = this.props;
    return (
      <div>
        <Table
          rowKey={(record: FileTableRecord) => record.iccid}
          columns={columns}
          dataSource={recordList}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileTable);
