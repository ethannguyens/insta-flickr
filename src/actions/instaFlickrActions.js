import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ajax from '../api/ajax';
import Flickr from '../api/flickr';

export function loadFeedsSuccess(items) {
  return {type: types.LOAD_FEEDS_SUCCESS, items};
}

export function saveItemSucess(item) {
  return {type: types.SAVE_ITEM_SUCCESS, item};
}

export function loadFeeds(tags) {
  return (dispatch) => {
    Flickr.getFeeds(tags).then(items => dispatch(loadFeedsSuccess(items)));
  };
}

export function saveItem(item) {
  return (dispatch) => {
    dispatch(saveItemSucess(item));
  }
}