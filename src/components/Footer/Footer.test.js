import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Footer from './Footer';


function setup() {
  const props = {
    footer: [
      {
        id: "portfolio",
        link: "http://ethannguyens.com/portfolio",
        text: "portfolio"
      }],
    term: [
      {
        id: "term",
        link: "/",
        text: "term"
      }
    ],
    social: [
      {
        id: "facebook",
        link: "https://www.facebook.com/ethan.nguyens",
        text: "facebook"
      }]
  };

  const wrapper = mount(<Footer {...props}/>);
  return {
    props,
    wrapper
  };
}

describe('Footer Component', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.hasClass('footer')).toBe(true);
  });
});
