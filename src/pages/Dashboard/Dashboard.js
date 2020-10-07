import React from 'react';
import { Layout } from 'antd';

import DashboardRoutes from './DashboardRoutes';

const { Content } = Layout;

const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden', overflowY: 'hidden' },
  content: {
    padding: '70px 70px 70px',
    flexShrink: '0',
    position: 'relative',
  },

};

export default function Dashboard() {




  return (


    <Layout style={{
      width: '100%',
      height: '100%'
    }}>

      <Layout style={styles.layout}>

        <Layout
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <Content style={styles.content}>
            <DashboardRoutes />
          </Content>

        </Layout>
      </Layout>
    </Layout>

  );



}
