import expect from 'expect';
import nock from 'nock';
import ajax from './ajax';

describe('Ajax', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should make an ajax call and return the correct data', (done) => {
    //arrange
    const words = {words: {a: {count: 1, prime: true}}};
    nock(`http://localhost:5000`)
      .get('/data')
      .reply(200, words);

    //act and assert
    ajax(`http://localhost:5000/data`, data => {
      expect(data).toEqual(words);
      done();
    });

  });
});
