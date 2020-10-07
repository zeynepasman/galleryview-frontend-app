import React, { lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  BrowserRouter,


} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import { Spin } from 'antd'
/* import { PUBLIC_ROUTE } from './route.constants';

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import('./pages/Gallery/Gallery')),
  },

]; */
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

export default function Routes() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <BrowserRouter>
          <Switch>
            < Route path='/' >
              <Dashboard />
            </Route>
            {/*   {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))} */}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
