const bit_js = require('./index.js'),
      expect = require('chai').expect,
      options = {
        'artist': 'the%20toasters',
        'app_id': 'bit-js_tests_app',
      }

describe('bit_js', () => {

  describe('bitGetArtist', () => {

    it('it should be a function', () => {
      expect(bit_js.bitGetArtist).to.be.an('function')
    })

    it('it should return an object', () => {
      bit_js.bitGetArtist(options, data => {
        expect(data).to.be.an('object')
      });
    })

  })

  describe('bitGetArtistEvents', () => {

    it('it should be a function', () => {
      expect(bit_js.bitGetArtist).to.be.an('function')
    })

    it('it should return an array of objects', () => {
      bit_js.bitGetArtistEvents(options, data => {
        const isArrayOfObjects = array => {
          return array.every( item => {
            return typeof item === 'object'
          })
        }

        expect(data).to.be.an('array').and.to.satisfy(isArrayOfObjects)

      });
    })

  })

})