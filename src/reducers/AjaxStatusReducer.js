import * as types from '../actions/actionTypes';

const initialState = 0;

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_success';
}

export default function ajaxStatusReducer(state = initialState, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
    /* eslint-disable no-else-return */
  } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
