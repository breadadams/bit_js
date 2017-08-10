const expect = require('chai').expect;
const bit_js = require('./index.js');

describe('bit_js', () => {
  describe('bitGetArtist', () => {
    it('it should be a function', () => {
      expect(bit_js.bitGetArtist).to.be.an('function')
    })
    it('it should return an object', () => {
      bit_js.bitGetArtist('the%20toasters', 'testenvappid', data => {
        expect(data).to.be.an('object')
      });
    })
  })
  describe('bitGetArtistEvents', () => {
    it('it should be a function', () => {
      expect(bit_js.bitGetArtist).to.be.an('function')
    })
    it('it should return an array of objects', () => {
      bit_js.bitGetArtistEvents('the%20toasters', 'testenvappid', data => {
        const isArrayOfObjects = array => {
          return array.every( item => {
            return typeof item === 'object';
          })
        }

        expect(data).to.be.an('array').and.to.satisfy(isArrayOfObjects);
      });

    })
  })
})