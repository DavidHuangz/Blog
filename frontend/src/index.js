import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<App />, document.getElementById('root'));

// Authentication
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + '/LoginPage'}
      cacheLocation='localstorage'
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
