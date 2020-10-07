import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Routes from './router';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);


export default App;
