import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import initialState from './initialState';
 import { verifyCredentials } from './redux-token-auth-config'

const store = configureStore(initialState);
 verifyCredentials(store)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);
registerServiceWorker();
