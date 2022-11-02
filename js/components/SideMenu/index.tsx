import React, { FunctionComponent, useState } from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import LogoTreenity from '../../../img/svg/LogoTreenity';
import Menu from '../Menu';
import Icon from '../Icon';

const { Sider } = Layout;

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

const menu = [{
  key: '1',
  icon: <Icon name="home" />,
  label: 'Iconography',
  link: '#iconography'
}, {
  key: '2',
  icon: <Icon name="template" />,
  label: 'Text styles',
  link: '#text-styles'
}, {
  key: '3',
  icon: <Icon name="upload" />,
  label: 'Inputs',
  link: '#inputs'
}, {
  key: '4',
  icon: <Icon name="trash" />,
  label: 'Buttons',
  link: '#buttons'
}, {
  key: '5',
  icon: <Icon name="trash" />,
  label: 'Selectors & Elements',
  link: '#selectors-elements'
}];

const SideMenu: FunctionComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <SiderContainer>
        <LogoContainer>
          <a href="/">
            <LogoTreenity />
          </a>
          <div onClick={() => setCollapsed(!collapsed)} className="trigger">
            <Icon name={collapsed ? 'arrow-drop-open' : 'arrow-drop-close'} />
          </div>
        </LogoContainer>
        <Menu menuItems={menu} />
      </SiderContainer>
    </Sider>
  );
};

export default SideMenu;