import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../sagas/actionTypes';
import Header from './Header';

class Page extends React.Component {
  render() {
    return (
      <div className="font-body min-h-screen">
          <Header />
          {this.props.children}
      </div>
    );
  }
}


export default connect(
  state => ({}),
  dispatch => ({})
)(Page);