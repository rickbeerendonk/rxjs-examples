/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { from, forkJoin } from 'rxjs';

const obs1$ = from([1, 3, 5]);
const obs2$ = from([2, 4, 6]);

const obs$ = forkJoin([obs1$, obs2$]);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// [ 5, 6 ]
// Complete!
