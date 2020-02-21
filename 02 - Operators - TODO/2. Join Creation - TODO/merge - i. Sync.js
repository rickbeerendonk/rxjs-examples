/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { from, merge } = require('../../node_modules/rxjs');

const obs1 = from([1, 3, 5]);
const obs2 = from([2, 4, 6]);

const obs = merge(obs1, obs2);

obs.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 3
// 5
// 2
// 4
// 6
// Complete!
