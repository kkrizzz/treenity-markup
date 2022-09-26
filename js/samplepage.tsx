import React, { useState } from 'react';
import styled from '@emotion/styled';

import ProgersMenu from './progers-menu';
import ProgersMenuAnt from './progers-menu-ant';
import MainMenuLeft from './ant/mainMenu';

import {
  LogoTreenity,
  OpenCloseSvg,
  OpenCloseFlipSvg,
  HomeSvg,
  TemplateSvg,
  UploadSvg,
  TrashSvg,
} from './svg';
import HeaderItemsContainer from './header-items';

import TreeAntNav from './ant/tree';

import { Row, Col, Layout } from 'antd';
import '../less/ant.less';
//import "../less/compact-treenity.less";

const SiderContainer = styled.div`
  width: 260px;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding: 24px 24px 36px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExplorerContainerStyled = styled.div`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 40px;
  b {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #a7a2bd;
    display: block;
    margin-bottom: 14px;
  }
`;

const MenuContainerStyled = styled.div`
  width: 100%;
  padding: 0 24px;
  b {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #a7a2bd;
    display: block;
    margin-bottom: 14px;
  }
`;

function ExplorerContainer() {
  return (
    <ExplorerContainerStyled>
      <b>Explorer</b>
      <TreeAntNav />
    </ExplorerContainerStyled>
  );
}

function MenuContainer() {
  return (
    <MenuContainerStyled>
      <b>Menu</b>
      <MainMenuLeft />
    </MenuContainerStyled>
  );
}

export default function SamplePage() {
  // Layout

  const [collapsed, setCollapsed] = useState(false);
  const { Header, Sider, Content } = Layout;

  return (
    <Row>
      <Col span={24}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <SiderContainer>
              <LogoContainer>
                <a href="#">
                  <LogoTreenity />
                </a>

                {React.createElement(
                  collapsed ? OpenCloseSvg : OpenCloseFlipSvg,
                  {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </LogoContainer>

              <ExplorerContainer />

              <MenuContainer />
            </SiderContainer>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: '0px 40px',
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <HeaderItemsContainer />
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <ProgersMenu />
              <ProgersMenuAnt />
              {/* <div id='new-theme' style={{transform: 'translate(-300px, -112px)'}}>
                <ProgersMenuAnt />
              </div> */}
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
  );
}
