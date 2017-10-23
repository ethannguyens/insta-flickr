import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instaFlickrReducer(state = initialState.instaFlickr, action) {
  switch (action.type) {
    case types.LOAD_FEEDS_SUCCESS:
      return Object.assign({}, state, {items: action.items});

    case types.SAVE_ITEM_SUCCESS: {
      const newSavedItems = state.savedItems ? [...state.savedItems, action.item] : [action.item];
      return Object.assign({}, state, {savedItems: newSavedItems});
    }

    case types.REMOVE_ITEM_SUCCESS: {
      let newSavedItems = [...state.savedItems];
      for (let i in state.savedItems) {
        if (JSON.stringify(action.item) === JSON.stringify(state.savedItems[i])) { //bad
          newSavedItems.splice(i, 1);
          break;
        }
      }
      return Object.assign({}, state, {savedItems: newSavedItems});
    }

    default:{
      return state;
    }
  }
}
