/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { from } = require('../../node_modules/rxjs');
const { max } = require('../../node_modules/rxjs/operators');

const obs1 = from([1, 7, 3, 5]);
const obs2 = obs1.pipe(max((x, y) => y > x)); // Reverse

obs2.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// Complete!
