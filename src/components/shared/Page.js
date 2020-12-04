import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../sagas/actionTypes';

class Page extends React.Component {
  componentDidMount() {
    this.props.initApi();
  }
  render() {
    return (
      <div className="font-body min-h-screen">
          {this.props.children}
      </div>
    );
  }
}


export default connect(
  state => ({}),
  dispatch => ({
    initApi: () => {
      dispatch({
        type: actionTypes['Effects/GET_REQUEST'],
        payload: {
          endpoint: 'users?page=2',
        }
      })
    }
  })
)(Page);