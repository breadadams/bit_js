'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('es6-promise').polyfill();
require('isomorphic-fetch');

// Fetch 
var bitFetch = function bitFetch(url) {
  return fetch('http://rest.bandsintown.com/artists/' + url).then(function (response) {
    if (response.status === 200 && response.statusText === 'OK') {
      return response.json();
    } else {
      throw new Error('Problem with server response. Status: ' + response.status);
    }
  });
};

// Options defaults
var defaultOptions = {
  artist: '',
  app_id: ''

  // GET ARTIST DETAILS
  // @options: object
  //    @artist: string
  //    @app_id: string
  // @callback: function 
};var bitGetArtist = function bitGetArtist() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments[1];

  var opt = _extends({}, defaultOptions);

  Object.assign(opt, options);

  if (opt.artist && opt.app_id) {
    bitFetch(opt.artist + '?app_id=' + opt.app_id).then(function (data) {
      callback(data);
    });
  }
};

// GET ARTIST EVENTS
// @options: object
//    @artist: string
//    @app_id: string
//    @daterange: string|object
// @callback: function
var bitGetArtistEvents = function bitGetArtistEvents() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments[1];

  var opt = _extends({}, defaultOptions, { 'daterange': '' });

  Object.assign(opt, options);

  if (opt.artist && opt.app_id) {
    var dateQuery = '';

    if (opt.daterange) {
      dateQuery += '&date=';

      if (typeof opt.daterange === 'string') {
        dateQuery += opt.daterange;
      } else if (_typeof(opt.daterange) === 'object') {
        dateQuery += opt.daterange.from + ',' + opt.daterange.to;
      } else {
        dateQuery = '';
      }
    }

    bitFetch(opt.artist + '/events?app_id=' + opt.app_id + dateQuery).then(function (data) {
      callback(data);
    });
  }
};

// Export bitGetArtist & bitGetArtistEvents
module.exports = {
  bitGetArtist: bitGetArtist,
  bitGetArtistEvents: bitGetArtistEvents
};