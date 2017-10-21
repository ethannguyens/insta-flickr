import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instaFlickrReducer(state = initialState.instaFlickr, action) {
  switch (action.type) {
    case types.LOAD_FEEDS_SUCCESS:
      return Object.assign({}, state, {items: action.items});
    
    case types.UPDATE_ITEM_SUCCESS:{
      const items = [...state.items];
      items[action.data.index] = action.data.item;
      return Object.assign({}, state, {items: items});
    }

    default:{
      return state;
    }
  }
}
