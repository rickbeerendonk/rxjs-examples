/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { from } = require('../../node_modules/rxjs');
const { map } = require('../../node_modules/rxjs/operators');

const obs1 = from([1, 2, 3, 4]);
const obs2 = obs1.pipe(map((value, index) => value + index));

obs2.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 3
// 5
// 7
// Complete!
