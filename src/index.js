require('es6-promise').polyfill();
require('isomorphic-fetch');

// BiT fetch utility
const bitFetch = (url) => fetch('http://rest.bandsintown.com/artists/'+url)
.then( (response) => {
  if ( response ) {
    return response.json()
  }
})


// Options defaults
const defaultOptions = {
  app_id: '',
  artist: '',
  'daterange': ''
}



// GET ARTIST DETAILS
// @options: object
//    @artist: string
//    @app_id: string
// @callback: function
const bitGetArtist = (options={}, callback) => {
  const opt = { ...defaultOptions, options };
  const {app_id, artist} = opt;
  const fetchPath = `${artist}?app_id=${app_id}`

  if ( artist && app_id ) {
    bitFetch(fetchPath).then(callback(data))
  }
}



// GET ARTIST EVENTS
// @options: object
//    @artist: string
//    @app_id: string
//    @daterange: string|object
// @callback: function
const bitGetArtistEvents = (options={}, callback) => {
  const opt = { ...defaultOptions, options }
  const {app_id, artist, daterange} = opt;

  if ( artist && app_id ) {
    let dateQuery = '';

    if ( daterange ) {
      dateQuery += '&date='

      if ( typeof daterange === 'string' ) {
        dateQuery += daterange;
      } else if ( typeof daterange === 'object' ) {
        dateQuery += `${daterange.from},${daterange.to}`
      } else {
        dateQuery = '';
      }
    }

    bitFetch(`${artist}/events?app_id=${app_id}${dateQuery}`).then(data => {
      callback(data)
    })
  }
}

// Export bitGetArtist & bitGetArtistEvents
module.exports = {
  bitGetArtist,
  bitGetArtistEvents
};
