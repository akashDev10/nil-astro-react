import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { AuthContextProvider } from './app/store/auth-context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthContextProvider>
  <BrowserRouter basename="/nil-astro/">
    <App />
  </BrowserRouter>
  </AuthContextProvider>
, document.getElementById('root'));

serviceWorker.unregister();