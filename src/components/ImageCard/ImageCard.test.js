import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import ImageCard from './ImageCard';
import initialStates from '../../reducers/initialState';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


function setup() {
  const props = initialStates.instaFlickr;
  const createStore = (state = initialStates) => {
    const middleWares = [];
    const mockStore = configureStore(middleWares);
    return mockStore(state);
  };
  const store = createStore();
  const item  = {
    title: 'test',
    media: {
      m: 'http://farm5.staticflickr.com/4480/37162216923_6ca29960df_c.jpg'
    }
  };
  const wrapper = mount(<Provider store={store}><ImageCard index={1} item={item}/></Provider>);
  return {
    props,
    wrapper
  };
}

describe('ImageCard', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('ImageCard').hasClass('image-card')).toBe(true);
  });
});
