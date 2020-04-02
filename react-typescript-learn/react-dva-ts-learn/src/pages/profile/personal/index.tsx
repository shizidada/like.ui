import React, { FunctionComponent, useState } from 'react';
import { Card, Button, Typography, Row, Icon } from 'antd';
import PersonalSettingDrawer from '../../../containers/profile/PersonalSettingDrawer';

import './index.less';

const { Title } = Typography;

const PersonalCenterPage: FunctionComponent = () => {
  const [isVisiblePersonalSetting, setVisiblePersonalSetting] = useState(true);
  const [isExpand, setExpand] = useState(false);

  const expandDetailInfo = () => {
    setExpand(!isExpand);
  };

  return (
    <Card className="personal-center-page-contaienr">
      <div className="personal-header-wrapper">
        <Row className="picture-picture-wrapper">
          <span className="upload-picture-button">
            <Icon type="camera" /> 上传封面图片
          </span>
        </Row>

        <Row className="profile-info-wrapper">
          <div className="profile-avatar-box">
            <div className="profile-avatar">
              <img
                width={160}
                height={160}
                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                alt=""
              />
            </div>

            <div className="profile-content-box">
              <div className="profile-content-name">
                <Title level={1}>Tom</Title>
              </div>
              <div
                className="profile-content-detail"
                style={{
                  overflow: 'hidden',
                  transition: 'height 300ms ease-out 0s',
                  height: isExpand ? '80px' : '0px',
                }}
              >
                所在行业
              </div>
              <div className="profile-content-footer">
                <div className="expand-detail-info" onClick={expandDetailInfo}>
                  查看详细资料
                </div>
                <Button onClick={() => setVisiblePersonalSetting(true)}>编辑个人资料</Button>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <PersonalSettingDrawer
        visible={isVisiblePersonalSetting}
        onClosePersonalSetting={setVisiblePersonalSetting}
      />
    </Card>
  );
};

export default PersonalCenterPage;
