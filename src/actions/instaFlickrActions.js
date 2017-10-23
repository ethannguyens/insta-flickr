import * as types from './actionTypes';
import Flickr from '../api/flickr';

export function loadFeedsSuccess(items) {
  return {type: types.LOAD_FEEDS_SUCCESS, items};
}
export function saveItemSuccess(item) {
  return {type: types.SAVE_ITEM_SUCCESS, item};
}

export function removeItemSuccess(item) {
  return {type: types.REMOVE_ITEM_SUCCESS, item};
}

export function loadFeeds(tags) {
  return (dispatch) => {
    Flickr.getFeeds(tags).then(items => dispatch(loadFeedsSuccess(items)));
  };
}

export function saveItem(item) {
  return (dispatch) => {
    dispatch(saveItemSuccess(item));
  };
}
export function removeItem(item) {
  return (dispatch) => {
    dispatch(removeItemSuccess(item));
  };
}
