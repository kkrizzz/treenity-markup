import { FunctionComponent, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import SideMenu from '../../components/SideMenu';
import styles from './app-layout.module.scss';
import HeaderLayout from '../HeaderLayout';

const AppLayout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Layout className={styles.root}>
      <SideMenu />
      <HeaderLayout>
        {children}
      </HeaderLayout>
    </Layout>
  );
};

export default AppLayout;