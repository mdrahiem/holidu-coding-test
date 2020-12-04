import { arrayToObject } from '../helpers/commonHelpers'; 

const actionTypes = arrayToObject([ 
  'Effects/GET_REQUEST', 
  'Effects/POST_REQUEST', 
  'Effects/PUT_REQUEST', 
  'Effects/DELETE_REQUEST', 
  'SET_IN_REDUX', 
  'SET_USER_SELECTION', 
]);

export default actionTypes;