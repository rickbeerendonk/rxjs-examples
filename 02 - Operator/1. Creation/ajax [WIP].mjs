/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { ajax } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';

// Short:
// const obs$ = ajax('https://jsonplaceholder.typicode.com/posts');

// Long:
const obs$ = ajax({
  createXHR: () => new XMLHttpRequest(),
  method: 'GET',
  responseType: 'json',
  url: 'https://jsonplaceholder.typicode.com/posts',
  crossDomain: true
});

obs$.subscribe(val => console.log(val));

// (list of posts)
