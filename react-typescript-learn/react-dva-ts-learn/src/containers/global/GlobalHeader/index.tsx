import React, { FunctionComponent, useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { ClickParam } from 'antd/lib/menu';
import { Icon, Menu, Dropdown, Avatar, Row, Col } from 'antd';
import ColorPicker from '../../../components/ColorPicker';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import MooseBreadcrumb from '../Breadcrumb';

import './index.less';

interface MooseGlobalHeaderProps extends ConnectState {
  onSliderMenuToggle: () => void;
  updateMenuStore: (collapsed?: object) => void;
}

const MooseGlobalHeader: FunctionComponent<MooseGlobalHeaderProps> = ({
  updateMenuStore,
  collapsed,
}) => {
  useEffect(() => {
    updateMenuStore();
    return () => {};
  });

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const onMenuClick = (param: ClickParam) => {
    console.log(param);
  };

  const onHeaderTrigger = () => {
    updateMenuStore({ collapsed: !collapsed });
  };

  const onHeaderRightClick = (event: any) => {
    // .getAttribute('data-color-picker')
    if (event.target.dataset.colorPicker === 'ColorPicker') {
      setDisplayColorPicker(true)
    } else {
      setDisplayColorPicker(false)
    }
  };

  const menu = (
    <Menu className="moose-global-header-menu" selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="userCenter">
        <Icon type="user" />
        个人中心
      </Menu.Item>
      <Menu.Item key="userinfo">
        <Icon type="setting" />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Row className="moose-global-header-container">
      <Col span={2}>
        <span className="moose-global-header-trigger" onClick={() => onHeaderTrigger()}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
      </Col>
      <Col span={16}>
        <MooseBreadcrumb />
      </Col>

      <Col span={6} className="moose-global-header-right" onClick={onHeaderRightClick}>
        <Icon type="bell" style={{ fontSize: 18 }} />
        <ColorPicker type="chrome" displayColorPicker={displayColorPicker} />
        <Dropdown overlay={menu} trigger={['hover']}>
          <span className="action">
            <Avatar className="avatar" size="small" icon="user" />
            <span>Tom</span>
          </span>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({
    updateMenuStore(record: object) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    },
  }),
)(MooseGlobalHeader);
