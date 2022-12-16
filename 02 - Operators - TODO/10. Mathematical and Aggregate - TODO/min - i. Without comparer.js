/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { from } = require('../../node_modules/rxjs');
const { min } = require('../../node_modules/rxjs/operators');

const obs1$ = from([3, 7, 1, 5]);
const obs2$ = obs1$.pipe(min());

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 7
// Complete!
