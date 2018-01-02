import React from 'react';
import { Router, Route } from 'dva/router';
import {Spin } from 'antd';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';

import styles from './index.less';

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="default" className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const BasicLayout = routerData['/'].component;
  return (
    <Router history={history}>
      <Route path="/" render={props => <BasicLayout {...props} />} />
    </Router>
  );
}

export default RouterConfig;
