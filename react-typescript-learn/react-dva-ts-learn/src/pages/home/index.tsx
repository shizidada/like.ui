import React, { FunctionComponent } from 'react';
import { Card, Row, Col } from 'antd';

import ImportBrokenLine from '../../components/chart/ImportBrokenLine';

import AdvertisementCard from '../../containers/home/AdvertisementCard';
import NoticeCard from '../../containers/home/NoticeCard';
import MessageCard from '../../containers/home/MessageCard';
import TabContentCard from '../../containers/home/TabContentCard';

import './index.less';

const HomePage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 24]} className="home-page-container">
        <Col span={18}>

          <Row gutter={[24, 24]}>
            <Col span={10}>
              <ImportBrokenLine renderId="ImportBrokenLine_1" />
            </Col>
            <Col span={14}>
              <ImportBrokenLine renderId="ImportBrokenLine_2" />
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col>
              <TabContentCard />
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row gutter={[24, 24]}>
            <Col>
              <MessageCard />
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col>
              <NoticeCard />
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col>
              <AdvertisementCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default HomePage
