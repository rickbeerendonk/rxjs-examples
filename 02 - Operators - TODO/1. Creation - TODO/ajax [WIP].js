/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

const { Observable } = require('../../node_modules/rxjs');
const { ajax } = require('../../node_modules/rxjs/ajax');

// Short:
// const obs = ajax('https://jsonplaceholder.typicode.com/posts');

// Long:
const obs = ajax({
  url: 'https://jsonplaceholder.typicode.com/posts'
});

obs.subscribe(val => console.log(val));

// (list of posts)
