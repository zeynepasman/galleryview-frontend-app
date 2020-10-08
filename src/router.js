import React, { lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Loader from './components/Feedback/Loader/loader';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

export default function Routes() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Switch>
            < Route path='/' >
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
