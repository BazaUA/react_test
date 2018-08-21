import { combineReducers } from 'redux';
import JsonDataReducer from './JsonDataReducer';
import AjaxStatusReducer from './AjaxStatusReducer';

const rootReducer = combineReducers({
  data: JsonDataReducer,
  ajaxCallsInProgress: AjaxStatusReducer
});

export default rootReducer;
