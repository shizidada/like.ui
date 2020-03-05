import React, { Component } from 'react';
import { Location } from 'history';
// import { connect } from 'dva';
// import { Dispatch } from 'redux';
import { Layout } from 'antd';
import SliderMenu from '../../containers/global/SliderMenu';
import GlobalHeader from '../../containers/global/GlobalHeader';
import TabsView from '../../containers/global/TabsView';
import BasicRoute from '../../routers/BasicRoute';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../typings';

import './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends ConnectState {
  location: Location<any>;
}
interface BasicLayoutState {}

class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  // private getLayoutStyle = () => {
  //   const { collapsed } = this.props;
  //   return {
  //     paddingLeft: collapsed ? '80px' : '200px',
  //     minHeight: '100vh',
  //   };
  // };

  public render() {
    console.log('BasicLayout :: ', this.props);
    return (
      <Layout className="basic-layout-container">
        <SliderMenu />
        <Layout
          className="basic-layout-content"
          // style={{
          //   ...this.getLayoutStyle(),
          // }}
        >
          <GlobalHeader />
          <TabsView />
          <Content className="basic-layout-wrapper">
            <BasicRoute />
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;

// connect(
//   // state: ConnectState
//   ({ global, menu }: ConnectState) => ({
//     ...menu,
//   }),
//   (dispatch: Dispatch) => ({
//     updateMenuStore(record: object) {
//       dispatch({ type: 'menu/updateMenuStore', payload: record });
//     },
//   }),
// )(BasicLayout);
