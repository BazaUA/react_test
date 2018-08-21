import { combineReducers } from 'redux';
import JsonDataReducer from './JsonDataReducer';

const rootReducer = combineReducers({
  data: JsonDataReducer
});

export default rootReducer;
