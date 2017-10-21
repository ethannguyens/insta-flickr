import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instaFlickrReducer(state = initialState.instaFlickr, action) {
  switch (action.type) {
    case types.LOAD_FEEDS_SUCCESS:
      return Object.assign({}, state, {items: action.items});
    case types.SAVE_ITEM_SUCCESS:
      return Object.assign({}, state, {savedItems: [...state.savedItems, action.item]});
    default:
      return state;
  }
}
