import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';
// eslint-disable-next-line import/namespace,import/no-extraneous-dependencies
import {Provider} from 'react-redux';
// eslint-disable-next-line import/namespace,import/default,import/no-named-as-default,import/no-named-as-default-member
import store from '../src/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
