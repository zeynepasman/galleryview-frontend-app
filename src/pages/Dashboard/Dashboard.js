import React from 'react';
import { Layout } from 'antd';
import usewindowSize from '../../lib/useWindowSize'
import DashboardRoutes from './DashboardRoutes';

const { Content } = Layout;

const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '70px 70px 70px',
    flexShrink: '0',
    position: 'relative',
  },

};

export default function Dashboard() {
  const { height } = usewindowSize();
  return (
    <Layout style={{ height: height }}>
      <Layout style={styles.layout}>
        <Layout
          style={{height: height}}
        >
          <Content style={styles.content}>
            <DashboardRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );



}
