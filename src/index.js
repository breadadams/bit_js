require('es6-promise').polyfill();
require('isomorphic-fetch');

// Fetch 
const bitFetch = (url) => fetch('http://rest.bandsintown.com/artists/'+url)
.then( (response) => {
  if ( response.status === 200 && response.statusText === 'OK') {
    return response.json()
  } else {
    throw new Error('Problem with server response. Status: ' + response.status)
  }
})


// Options defaults
const defaultOptions = {
  artist: '',
  app_id: '',
}



// GET ARTIST DETAILS
// @options: object
//    @artist: string
//    @app_id: string
// @callback: function 
const bitGetArtist = (options={}, callback) => {
  const opt = { ...defaultOptions };

  Object.assign(opt, options);

  if ( opt.artist && opt.app_id ) {
    bitFetch(`${opt.artist}?app_id=${opt.app_id}`).then(data => {
      callback(data)
    })
  }
}



// GET ARTIST EVENTS
// @options: object
//    @artist: string
//    @app_id: string
//    @daterange: string|object
// @callback: function
const bitGetArtistEvents = (options={}, callback) => {
  const opt = { ...defaultOptions, 'daterange': '' }

  Object.assign(opt, options);

  if ( opt.artist && opt.app_id ) {
    let dateQuery = '';

    if ( opt.daterange ) {
      dateQuery += '&date='

      if ( typeof opt.daterange === 'string' ) {
        dateQuery += opt.daterange;
      } else if ( typeof opt.daterange === 'object' ) {
        dateQuery += `${opt.daterange.from},${opt.daterange.to}`
      } else {
        dateQuery = '';
      }
    }

    bitFetch(`${opt.artist}/events?app_id=${opt.app_id}${dateQuery}`).then(data => {
      callback(data)
    })
  }
}

// Export bitGetArtist & bitGetArtistEvents
module.exports = {
  bitGetArtist,
  bitGetArtistEvents
};