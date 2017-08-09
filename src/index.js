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



// GET ARTIST DETAILS
// @artist: string
// @app_id: string
// @callback: function 
const bitGetArtist = (artist='', app_id='', callback) => {
  if ( artist && app_id ) {
    const url = artist + '?app_id='+ app_id;
    bitFetch(url).then(data => {
      callback(data)
    })
  }
}



// GET ARTIST EVENTS
// @artist: string
// @app_id: string
// @callback: function 
const bitGetArtistEvents = (artist='', app_id='', callback) => {
  if ( artist && app_id ) {
    const url = artist + '/events?app_id='+ app_id;
    bitFetch(url).then(data => {
      callback(data)
    })
  }
}

// Export bitGetArtist & bitGetArtistEvents
module.exports = {
  bitGetArtist,
  bitGetArtistEvents
};