import expect from 'expect';
import nock from 'nock';
import ajax from './ajax';

describe('Ajax', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // it('should make an ajax call and return the correct data', (done) => {
  //   //Arrange
  //   const expectedData =  {
  //     test: true
  //   };
  //   nock(`http://test.com`)
  //     .get('/data')
  //     .reply(200);
  //
  //   //Act and Assert
  //   ajax(`http://test.com/data`, data => {
  //     expect(data).toEqual(expectedData);
  //     done();
  //   });
  //
  // });
});
