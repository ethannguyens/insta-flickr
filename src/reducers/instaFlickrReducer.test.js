import instaFlickrReducer from './instaFlickrReducer';
import * as types from '../actions/actionTypes';
import initialStates from './initialState';
import expect from "expect";

describe('Insta Flickr Reducers', () => {
  it('should return the initial state', () => {
    //Arrange
    const expectedState = initialStates.instaFlickr;
    //Act
    const actualState = instaFlickrReducer(undefined, {});
    //Assert
    expect(actualState).toBe(expectedState);
  });

  it('should return new state with fetched items for LOAD_FEEDS_SUCCESS', () => {
    //Arrange
    const items = ['a', 'b'];
    const action = {type: types.LOAD_FEEDS_SUCCESS, items: items};
    const expectedState = Object.assign({}, initialStates.instaFlickr, {items: items});
    //Act
    const actualState = instaFlickrReducer(undefined, action);
    //Assert
    expect(actualState).toEqual(expectedState);
  });

  it('should return new state with the saved item for ADD_ITEM_SUCCESS', () => {
    //Arrange
    const item = {a: 'a'};
    const action = {type: types.SAVE_ITEM_SUCCESS, item: item};
    const expectedState = Object.assign({}, initialStates.instaFlickr, {savedItems: [item]});
    //Act
    const actualState = instaFlickrReducer(undefined, action);
    //Assert
    expect(actualState).toEqual(expectedState);
  });

  it('should return new state without the remove item for REMOVE_ITEM_SUCCESS', () => {
    //Arrange
    const item = {a: 'a'};
    const action = {type: types.REMOVE_ITEM_SUCCESS, item: item};
    const state = Object.assign({}, initialStates.instaFlickr, {saveItems: [{a: 'a'}]});
    const expectedState = Object.assign({}, initialStates.instaFlickr, {savedItems: []});
    //Act
    const actualState = instaFlickrReducer(undefined, action);
    //Assert
    expect(actualState).toEqual(expectedState);
  });
});
