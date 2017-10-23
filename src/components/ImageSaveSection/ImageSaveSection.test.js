import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import ImageSaveSection from './ImageSaveSection';
import initialStates from '../../reducers/initialState';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


function setup() {
  const props = initialStates.instaFlickr;
  const savedItems  = [{
    title: 'test',
    media: {
      m: 'http://farm5.staticflickr.com/4480/37162216923_6ca29960df_c.jpg'
    }
  }];
  let mockState = Object.assign({}, initialStates, {instaFlickr: {
    savedItems: savedItems
  }});
  const createStore = (state = mockState) => {
    const middleWares = [];
    const mockStore = configureStore(middleWares);
    return mockStore(state);
  };
  const store = createStore();

  const wrapper = mount(<Provider store={store}><ImageSaveSection/></Provider>);
  return {
    props,
    wrapper
  }
}

describe('ImageSection Component', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('ImageSaveSection').hasClass('image-save-section')).toBe(true);
  });

  it('should render ImageCard', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('ImageCard').hasClass('image-card')).toBe(true);
  });
});
