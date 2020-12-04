import actionTypes from '../sagas/actionTypes'; 
import Immutable from 'immutable'; 

export default function mainReducer(state, action) { 
  try { 
    switch (action.type) { 
      case actionTypes.SET_IN_REDUX: 
        try { 
          if (typeof action.payload.path === 'string') { 
            action.payload.path = action.payload.path.split('.'); 
          } 
          return state.mergeDeep(action.payload.path, 
              Immutable.fromJS(action.payload.data)); 
        } catch (e) { 
          return state.setIn(action.payload.path, action.payload.data); 
        } 
      default: 
        return state; 
    } 
  } catch (e) { 
    console.error('error in mainReducer: '); 
    console.error(e); 
  } 
}