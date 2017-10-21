import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instaFlickrReducer(state = initialState.instaFlickr, action) {
  switch (action.type) {
    case types.LOAD_FEEDS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}