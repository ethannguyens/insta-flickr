import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ajax from '../api/ajax';
import Flickr from '../api/flickr';

export function loadFeedsSuccess(items) {
  return {type: types.LOAD_FEEDS_SUCCESS, items};
}

export function updateItemSucess(data) {
  return {type: types.UPDATE_ITEM_SUCCESS, data};
}

export function loadFeeds(tags) {
  return (dispatch) => {
    Flickr.getFeeds(tags).then(items => dispatch(loadFeedsSuccess(items)));
  };
}

export function saveItem(index, item) {
  return (dispatch) => {
    const savedItem = Object.assign({}, item, {save: true});
    const data = {
      index: index,
      item: savedItem
    };
    dispatch(updateItemSucess(data));
  };
}
export function removeItem(index, item) {
  return (dispatch) => {
    const removeItem = Object.assign({}, item, {save: false});
    const data = {
      index: index,
      item: removeItem
    };
    dispatch(updateItemSucess(data));
  };
}