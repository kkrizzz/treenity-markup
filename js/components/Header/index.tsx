import React, { FunctionComponent } from 'react';
import HeaderItemsContainer from '../../header-items';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent: FunctionComponent = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0px 40px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      Header
      {/*<HeaderSearch />*/}
      {/*<HeaderItemsContainer />*/}
    </Header>
  );
};

export default HeaderComponent;