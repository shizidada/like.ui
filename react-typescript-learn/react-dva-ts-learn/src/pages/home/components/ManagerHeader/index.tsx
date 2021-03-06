import { Avatar, Col, Dropdown, Icon, Menu, Row } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { connect } from 'dva';
import { Link } from 'dva/router';
import React, { FunctionComponent, useState } from 'react';
import { Dispatch } from 'redux';
import ColorPicker from '../../../../components/ColorPicker';
import { AppState } from '../../../../typings';
import MooseBreadcrumb from '../../../../containers/global/Breadcrumb';
import './index.less';

interface ManagerHeaderProps extends AppState {
}

const ManagerHeader: FunctionComponent<ManagerHeaderProps> = ({ collapsed, updateMenuStore }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const onMenuClick = (param: ClickParam) => {
    console.log(param);
  };

  const onHeaderRightClick = (event: any) => {
    // .getAttribute('data-color-picker')
    if (event.target.dataset.colorPicker === 'ColorPicker') {
      setDisplayColorPicker(true);
    } else {
      setDisplayColorPicker(false);
    }
  };

  const menu = (
    <Menu className="manger-header-menu" selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="userCenter">
        <Icon type="user" />
        <span>
          <Link to="/profile/personal">个人中心</Link>
        </span>
      </Menu.Item>
      <Menu.Item key="userInfo">
        <Icon type="setting" />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />
        <span>
          <Link to="/logout">退出登录</Link>
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Row className="manger-header-container">
      <Col span={2}>
        <span className="manger-header-trigger">
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
      </Col>
      <Col span={16}>
        <MooseBreadcrumb />
      </Col>

      <Col span={6} className="manger-header-right" onClick={onHeaderRightClick}>
        <Icon type="bell" style={{ fontSize: 18 }} />
        <ColorPicker type="chrome" displayColorPicker={displayColorPicker} />
        {/* visible */}
        <Dropdown overlay={menu} trigger={['hover']}>
          <span className="action">
            {/* <Avatar className="avatar" size="small" icon="user" /> */}
            <Avatar className="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            <span>Tom</span>
          </span>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default connect(
  (state: AppState) => {
    return {
      ...state.menu
    };
  },
  (dispatch: Dispatch) => ({
    updateMenuStore(record: object) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    }
  })
)(ManagerHeader);
