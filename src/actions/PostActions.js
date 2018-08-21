import axios from 'axios';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

export const postsFetch = () => {
  const jsonUrl = 'https://thewirecutter.com/wp-json/wp/v2/posts';
  return (dispatch) => {
    dispatch(beginAjaxCall());
    axios.get(jsonUrl)
      .then((response) => {
        dispatch({ type: types.LOAD_JSON_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
};

export const getPostById = (postId) => {
  const jsonUrl = `https://thewirecutter.com/wp-json/wp/v2/posts/${postId}`;
  return (dispatch) => {
    dispatch(beginAjaxCall());
    axios.get(jsonUrl)
      .then((response) => {
        dispatch({ type: types.LOAD_POST_BY_ID_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
};
