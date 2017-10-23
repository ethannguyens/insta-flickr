import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './instaFlickrActions';
import * as types from './actionTypes';
import intialState from '../reducers/initialState';
import sinon from 'sinon';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Pudo actions', () => {
  it('should create and dispatch LOAD_FEEDS_SUCCESS action for loadFeedsSuccess', () => {
    //Arrange
    const items = ['a', 'b'];
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.LOAD_FEEDS_SUCCESS,
        items: items
      }
    ];
    //Act
    store.dispatch(actions.loadFeedsSuccess(items));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create and dispatch SAVE_ITEM_SUCCESS action for saveItemSuccess', () => {
    //Arrange
    const item = "a";
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.SAVE_ITEM_SUCCESS,
        item: item
      }
    ];
    //Act
    store.dispatch(actions.saveItemSuccess(item));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create and dispatch REMOVE_ITEM_SUCCESS action for removeItemSuccess', () => {
    //Arrange
    const item = "a";
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.REMOVE_ITEM_SUCCESS,
        item: item
      }
    ];
    //Act
    store.dispatch(actions.removeItemSuccess(item));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call not call loadFeedsSuccess due to fail FlickrApi', () => {
    //Arrange
    const store = mockStore(intialState);
    sinon.spy(actions, "loadFeedsSuccess");
    //Act
    store.dispatch(actions.loadFeeds());
    //Assert
    expect(actions.loadFeedsSuccess.calledOnce).toBe(false);
  });

  it('should call saveItemSuccess and dispatch SAVE_ITEM_SUCCESS for saveItem', () => {
    //Arrange
    const item = "a";
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.SAVE_ITEM_SUCCESS,
        item: item
      }
    ];
    //Act
    store.dispatch(actions.saveItem(item));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call saveItemSuccess and dispatch REMOVE_ITEM_SUCCESS for removeItem', () => {
    //Arrange
    const item = "a";
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.REMOVE_ITEM_SUCCESS,
        item: item
      }
    ];
    //Act
    store.dispatch(actions.removeItem(item));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });
});
