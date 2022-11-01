import { FunctionComponent, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import styles from '../AppLayout/app-layout.module.scss'
import Header from '../../components/Header'

const AppLayout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Layout className={styles.root}>
      <Header/>
      {children}
    </Layout>
  );
};

export default AppLayout;