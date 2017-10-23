import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import initialStates from '../../reducers/initialState';


import Header from './Header';


function setup() {
  const props = {
    menu: [{
      id: "home",
      link: "",
      text: "home"
    }]
  };

  const createStore = (state = initialStates) => {
    const middleWares = [];
    const mockStore = configureStore(middleWares);
    return mockStore(state);
  };
  const store = createStore();

  const wrapper = mount(<Provider store={store}><Header {...props}/></Provider>);
  return {
    props,
    wrapper
  };
}

describe('Header Component', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.hasClass('header')).toBe(true);
  });
  it('should render SearchBar', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('SearchBar').hasClass('search-bar')).toBe(true);
  });
});
