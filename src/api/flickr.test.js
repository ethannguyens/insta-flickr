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

  it('should return the correct request img size', () => {
    //Arrange
    const img = "http://farm5.staticflickr.com/4496/37789870956_f9340188bc_m.jpg";
    const expectedImg = "http://farm5.staticflickr.com/4496/37789870956_f9340188bc_c.jpg";

    //Act
    const actualImg = Flickr.getImgSize(img);

    //Assert
    expect(actualImg).toBe(expectedImg);
  })
});
