/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

const { Observable } = require('../../node_modules/rxjs');

const obs = Observable.create(function(observer) {
  observer.next('One');
  observer.next('Two');
  observer.complete();
});

obs.subscribe(val => console.log(val));

// One
// Two
