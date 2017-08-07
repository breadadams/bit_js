# bit_js

A small javascript library to retrieve data from the [Bands in Town API](http://www.bandsintown.com/api/overview).

## Installation

#### NPM
`npm i bit_js -D` (Install and save to devDependencies)



## Importing

##### _ES5_
```
var bit_js = require('bit_js');
```

##### _ES6_
```
import {
  bitGetArtist,
  bitGetArtistEvents
} from 'bit_js'
```



## Usage

##### _ES5_
```
var artist = 'skrillex';
var app_id = 'my_app_id';
var callback = function(data) {
  console.log(data)
}

bit_js.bitGetArtist(artist, app_id, callback);
bit_js.bitGetArtistEvents(artist, app_id, callback);
```

##### _ES6_
```
const artist = 'skrillex';
const app_id = 'my_app_id';

bitGetArtist(artist, app_id, data => console.log(data))
bitGetArtistEvents(artist, app_id, data => console.log(data))
```

### Parameters

`artist`: Name of the artist, the formatting can be strange here sometimes.
For example `Britney%20Spears`.

`app_id`: ID of the app using the API. This can be anything.

`callback(data)`: Callback function that returns data if call is successful.



## T&C

For usage terms & conditions see the [BiT API Terms](http://corp.bandsintown.com/api-terms/).

Note: This project is **not** _affiliated with_ or _maintained by_ [Bands in Town](https://bandsintown.com/).
