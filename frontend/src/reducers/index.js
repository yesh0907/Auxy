import { combineReducers } from 'redux';
import diagnosisReducer from './diagnosis';

// Make a root reducer that can handle more than one reducer
const rootReducer = combineReducers({
  diagnose: diagnosisReducer
});

export default rootReducer;
