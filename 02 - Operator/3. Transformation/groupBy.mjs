/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { groupBy } from 'rxjs/operators';

const obs1$ = from([
  { name: 'Alexandra', location: 'Norway' },
  { name: 'Benjamin', location: 'Denmark' },
  { name: 'Charlotte', location: 'Denmark' }
]);
const obs2$ = obs1$.pipe(groupBy(value => value.location));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Observable { _subscribe: [Function], key: 'Norway' }
// Observable { _subscribe: [Function], key: 'Denmark' }
// Complete!
