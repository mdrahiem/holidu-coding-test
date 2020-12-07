import actionTypes from '../sagas/actionTypes'; 
import Immutable, { List } from 'immutable'; 

export default function mainReducer(state, action) { 
  try { 
    switch (action.type) { 
      case actionTypes.SET_IN_REDUX: 
        try { 
          if (typeof action.payload.path === 'string') { 
            action.payload.path = action.payload.path.split('.'); 
          }
          if (action.payload.path.includes('favourites')) {
            const favourites = state.getIn('appData.favourites'.split('.'), new List([]));
            const checkIndex = favourites.findIndex(f => f == action.payload.data);
            if (favourites.size && checkIndex >= 0) {     // checking for existing favourites
              action.payload.data = favourites.delete(checkIndex)
            } else {
              action.payload.data = favourites.set(favourites.size, action.payload.data)
            }
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