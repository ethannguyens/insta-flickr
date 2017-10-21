import expect from 'expect';

import Flickr from './flickr';


describe("Flickr Api test", () => {
  it('should always return the result with 20 items', () => {
    //Arrange
    const tags = "nature";

    //Act && Assert
    Flickr.getFeeds(tags).then(items => {
      expect(items.length).toEqual(20);
    });
  });
});
