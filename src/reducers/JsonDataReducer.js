import * as types from '../actions/actionTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_JSON_SUCCESS:
      return action.payload;
    case types.LOAD_POST_BY_ID_SUCCESS:
      return [action.payload];
    default:
      return state;
  }
};
