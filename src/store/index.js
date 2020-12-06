import { createStore, applyMiddleware } from "redux"; 
import createSagaMiddleware from 'redux-saga'; 
import mainReducer from "../reducers"; 
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; 
import sagas from '../sagas'; 
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware(); 
const store = createStore( 
  mainReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)) 
); 

sagaMiddleware.run(sagas); 

export default store;