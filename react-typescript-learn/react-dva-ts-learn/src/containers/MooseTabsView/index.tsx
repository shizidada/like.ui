import React from 'react';
import { Layout, Icon, Row, Col, Avatar } from 'antd';

import './index.less';

const { Header } = Layout;

interface MooseTabsViewProps {}

class MooseTabsView extends React.Component<MooseTabsViewProps, {}> {
  public render() {
    return (
      <Header className="moose-tabs-view-container">will fill click menu generator tab</Header>
    );
  }
}

export default MooseTabsView;
