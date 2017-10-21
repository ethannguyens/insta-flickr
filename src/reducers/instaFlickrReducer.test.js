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

  it('should return new state with updated items for UPDATE_ITEM_SUCCESS', () => {
    //Arrange
    const state = Object.assign({}, initialStates.instaFlickr, {items: ['a', 'b']});
    const data = {
      index: 0,
      item: 'c'
    };
    const action = {type: types.UPDATE_ITEM_SUCCESS, data: data};
    const expectedState = Object.assign({}, state, {items: ['c', 'b']});
    //Act
    const actualState = instaFlickrReducer(state, action);
    //Assert
    expect(actualState).toEqual(expectedState);
  });
});