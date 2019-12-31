/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

const { empty } = require('../../node_modules/rxjs');

const obs = empty();

obs.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});
