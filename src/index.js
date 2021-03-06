import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/App.jsx';
import './client/styles.scss';
import store from './client/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('index'),
);
