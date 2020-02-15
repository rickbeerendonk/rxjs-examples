/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { range } = require('../../node_modules/rxjs');

const obs = range(2, 3);

obs.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 2
// 3
// 4
// Complete!
