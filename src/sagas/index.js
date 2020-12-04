import {fork, takeEvery} from 'redux-saga/effects'; 
import actionTypes from './actionTypes'; 
import sendRequest from '../services/sendRequest';
 
function* sagas() { 
  yield takeEvery(({type}) => type.startsWith('Effects/'), function*(action) { 
    switch (action.type) { 
      case actionTypes['Effects/GET_REQUEST']: 
        action.method = 'get' 
        yield fork(sendRequest, action); 
        break; 
      case actionTypes['Effects/POST_REQUEST']: 
        action.method = 'post' 
        yield fork(sendRequest, action); 
        break; 
      case actionTypes['Effects/PUT_REQUEST']: 
        action.method = 'put' 
        yield fork(sendRequest, action); 
        break; 
      case actionTypes['Effects/DELETE_REQUEST']: 
        action.method = 'delete' 
        yield fork(sendRequest, action); 
        break; 
      default: 
        break; 
    } 
  }); 
} 
export default sagas;