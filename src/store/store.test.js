import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as wordActions from '../actions/wordActions';

describe('Store', function() {
  it('Should handle loading words', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const words = {
      title: {
        count: 1,
        prime: true
      }
    };

    // act
    const action = wordActions.loadWordsSuccess(words);
    store.dispatch(action);

    // assert
    const actual = store.getState().words;
    const expected = {
      title: {
        count: 1,
        prime: true
      }
    };

    expect(actual).toEqual(expected);
  });
});
