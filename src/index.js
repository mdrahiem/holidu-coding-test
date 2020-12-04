import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// styles
import './assets/main.css';
import './index.scss';   // for custom styles
// redux store
import { Provider } from "react-redux";
import store from "./store";
import Page from './components/shared/Page'
import Dashboard from './components/Dashboard'
// router
import { Router, Link } from "@reach/router"

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Page path="/">
          <Dashboard path="/" />
        </Page>
      </Router>
    </Provider>
  </StrictMode>,
  document.querySelector('#root'),
);
