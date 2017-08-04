import 'whatwg-fetch';
import fetch from 'node-fetch';

// Fetch 
const bitFetch = (url) => fetch('http://rest.bandsintown.com/artists/'+url)
.then( (response) => {
  if ( response.status === 200 && response.statusText === 'OK') {
    return response.json()
  } else {
    throw new Error('Problem with server response. Status: ' + response.status)
  }
} )
.then( data => {
  return data
})



// GET ARTIST DETAILS
// @artist: string
// @app_id: string
// @callback: function 
const bitGetArtist = (artist='', app_id='', callback) => {
  if ( !artist && !app_id ) { return false }
  const url = artist + '?app_id='+ app_id;
  bitFetch(url).then(data => {
    if ( data && callback && typeof callback === 'function' ) {
      callback(data)
    }
  })
}



// GET ARTIST EVENTS
// @artist: string
// @app_id: string
// @callback: function 
const bitGetArtistEvents = (artist='', app_id='', callback) => {
  if ( !artist && !app_id ) { return false }
  const url = artist + '/events?app_id='+ app_id;
  bitFetch(url).then(data => {
    if ( data && callback && typeof callback === 'function' ) {
      callback(data)
    }
  })
}

// Export bitGetArtist & bitGetArtistEvents
module.exports = {
  bitGetArtist,
  bitGetArtistEvents
};