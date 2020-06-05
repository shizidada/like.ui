import React, { FunctionComponent, useEffect } from 'react';
import { Location } from 'history';
// import { connect } from 'dva';
// import { Dispatch } from 'redux';
import H from 'history';
import { Layout } from 'antd';
import SliderMenu from '../../containers/global/SliderMenu';
import ManagerHeader from '../../containers/header/ManagerHeader';
import BasicRoute from '../../routers/BasicRoute';

// eslint-disable-next-line import/extensions
import { AppState } from '../../typings';
import { BASE_NAME } from '../../config/less.config';

import './index.less';
import DraggableTabView from '../../containers/global/DraggableTabView';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends AppState {
  location: Location<{}>;
  history: H.History;
}

const OLD_LESS_ID = `less:${BASE_NAME ? `${BASE_NAME}-` : ''}color:old`;

const BasicLayout: FunctionComponent<BasicLayoutProps> = ({ location, history, login }) => {
  // 初始化主题？
  const initTheme = () => {
    const themeStyleContent = window.localStorage.getItem('THEME_STYLE_CONTENT');
    if (themeStyleContent) {
      const themeStyle = document.createElement('style');
      themeStyle.type = 'text/css';
      themeStyle.id = OLD_LESS_ID;
      themeStyle.innerHTML = themeStyleContent;
      document.body.insertBefore(themeStyle, document.body.firstChild);
    }
  };

  useEffect(() => {
    initTheme();
    return () => {};
  }, [location.pathname]);

  return (
    <Layout className="basic-layout-container">
      <SliderMenu />
      <Layout className="basic-layout-content">
        <ManagerHeader />
        <DraggableTabView history={history} />
        <Content className="basic-layout-wrapper">
          <BasicRoute />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
