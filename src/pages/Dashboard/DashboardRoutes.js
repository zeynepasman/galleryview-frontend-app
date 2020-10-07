import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
const routes = [
  {
    path: '',
    component: lazy(() => import('../Gallery/Gallery')),
    exact: true,

  },
];

export default function AppRouter() {

  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
