/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { ajax } from 'rxjs/ajax/index.js';
import { XMLHttpRequest } from 'xmlhttprequest';

function createXHR() {
  return new XMLHttpRequest();
}

// Short:
// const obs = ajax('https://jsonplaceholder.typicode.com/posts');

// Long:
const obs = ajax({
  createXHR,
  url: 'https://jsonplaceholder.typicode.com/posts',
  crossDomain: true
});

obs.subscribe(val => console.log(val));

// (list of posts)
