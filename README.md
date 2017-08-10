# bit_js

[![npm version](https://badge.fury.io/js/bit_js.svg)](https://badge.fury.io/js/bit_js)
[![Build Status](https://travis-ci.org/breadadams/bit_js.svg?branch=master)](https://travis-ci.org/breadadams/bit_js)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A small javascript library to retrieve data from the [Bands in Town API](http://www.bandsintown.com/api/overview).

## Installation

_(Install and save to dependencies)_

#### NPM
`npm i bit_js --save`

#### Yarn
`yarn add bit_js`


## Usage

##### _ES5_
```
var bit_js = require('bit_js');


var options = {
  'artist': 'skrillex',
  'app_id': 'my_app_id',
};

var optionsEvents = {
  'artist': 'skrillex',
  'app_id': 'my_app_id',
  'daterange': '2017-09-20',
}

var callback = function(data) {
  console.log(data)
}


bit_js.bitGetArtist(options, callback);
bit_js.bitGetArtistEvents(optionsEvents, callback);
```

##### _ES6_
```
import {
  bitGetArtist,
  bitGetArtistEvents
} from 'bit_js'


let options = {
  'artist': 'skrillex',
  'app_id': 'my_app_id',
}

let optionsEvents = {
  ...options,
  'daterange': {
    'from': '2017-08-31',
    'to': '2017-10-05',
  }
}


bitGetArtist(options, data => console.log(data))
bitGetArtistEvents(optionsEvents, data => console.log(data))
```

### Parameters

* **options** `object`:

  - **artist** `string`: Name of the artist. For example `Britney%20Spears`.
  
  - **app_id** `string`:
    ID of the app using the API. This can be anything.

  - **daterange** `string|object`:
      Can be a single date, or an object (`{'from':'','to':''}`). Date should be in _"BiT format"_, `YYYY-MM-DD`.

* **callback(data)** `function`: Callback function that returns data if call is successful.



## T&C

For usage terms & conditions see the [BiT API Terms](http://corp.bandsintown.com/api-terms/).

Note: This project is **not** _affiliated with_ or _maintained by_ [Bands in Town](https://bandsintown.com/).
