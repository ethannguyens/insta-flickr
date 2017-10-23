import expect from 'expect';
import initialState from '../reducers/initialState';
import * as storage from './localStorage';

describe('localStorage to serialise Redux state', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the state on localStorage', () => {
    //Arrange
    const expectedState = initialState;
    storage.saveState(initialState);
    //Act
    const actualState = storage.loadState();
    //Assert
    expect(actualState).toEqual(expectedState);
  });

  it('should save the state successfully on localStorage', () => {
    //Arrange
    const expectedState = initialState;
    //Act
    storage.saveState(initialState);
    const actualState = JSON.parse(localStorage.getItem('state'));
    //Assert
    expect(actualState).toEqual(expectedState);
  });
});
