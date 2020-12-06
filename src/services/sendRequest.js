import {call, put} from 'redux-saga/effects';
import axios from '../services/axios';
import actionTypes from '../sagas/actionTypes';
import { baseURL } from '../helpers/constants';


export default function* sendRequest(action) {
  let absUrl = `${baseURL}/${action.payload.endpoint}`;
  let key = `appData.${action.payload.endpoint}.${action.method}`;
  let ajaxConfig = {
    method: action.method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*'
    },
    url: absUrl,
  };
  if (action.payload.params) {
    ajaxConfig.params = action.payload.params
  }
  if (action.payload.data) {
    ajaxConfig.data = action.payload.data
  }
  let isFetchingKey = `${key}.isFetching`;
  let responseKey = `${key}.response`;
  yield put({
    type: actionTypes.SET_IN_REDUX,
    payload: {
      path: isFetchingKey.split('.'),
      data: true
    }
  });
  try {
    let response = yield call(axios, ajaxConfig);
    yield put({
      type: actionTypes.SET_IN_REDUX,
      payload: {
        path: responseKey.split('.'),
        data: response.data
      }
    });
  } catch (e) {
    console.log(e, 'errrrrrrrrrrrrrrrrrrr from sendrequest');
  } finally {
    yield put({
      type: actionTypes.SET_IN_REDUX,
      payload: {
        path: isFetchingKey.split('.'),
        data: false
      }
    });
  }
}
