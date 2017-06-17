import { combineReducers } from 'redux';
import diagnosisReducer from './diagnosis';
import userReducer from './user';

// Make a root reducer that can handle more than one reducer
const rootReducer = combineReducers({
  user: userReducer,
  diagnose: diagnosisReducer
});

export default rootReducer;
