'use strict';

require('whatwg-fetch');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fetch 
var bitFetch = function bitFetch(url) {
  return (0, _nodeFetch2.default)('//rest.bandsintown.com/artists/' + url).then(function (response) {
    if (response.status === 200 && response.statusText === 'OK') {
      return response.json();
    } else {
      throw new Error('Problem with server response. Status: ' + response.status);
    }
  }).then(function (data) {
    return data;
  });
};

// GET ARTIST DETAILS
// @artist: string
// @app_id: string
// @callback: function 
var bitGetArtist = function bitGetArtist() {
  var artist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var app_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var callback = arguments[2];

  if (!artist && !app_id) {
    return false;
  }
  var url = artist + '?app_id=' + app_id;
  bitFetch(url).then(function (data) {
    if (data && callback && typeof callback === 'function') {
      callback(data);
    }
  });
};

// GET ARTIST EVENTS
// @artist: string
// @app_id: string
// @callback: function 
var bitGetArtistEvents = function bitGetArtistEvents() {
  var artist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var app_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var callback = arguments[2];

  if (!artist && !app_id) {
    return false;
  }
  var url = artist + '/events?app_id=' + app_id;
  bitFetch(url).then(function (data) {
    if (data && callback && typeof callback === 'function') {
      callback(data);
    }
  });
};

module.exports = {
  bitGetArtist: bitGetArtist,
  bitGetArtistEvents: bitGetArtistEvents
};