import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router"
// styles
import './assets/main.css';
import './index.scss';   // for custom styles
// redux store
import store from "./store";
import Page from './components/shared/Page'
import SearchResult from './components/SearchResult.component'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Page path="/">
          <SearchResult path="/" />
        </Page>
      </Router>
    </Provider>
  </StrictMode>,
  document.querySelector('#root'),
);
