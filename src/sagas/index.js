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
      default: 
        break; 
    } 
  }); 
} 
export default sagas;