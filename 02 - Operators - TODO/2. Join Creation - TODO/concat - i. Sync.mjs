/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { from, concat } from 'rxjs';

const obs1$ = from([1, 3, 5]);
const obs2$ = from([2, 4, 6]);

const obs$ = concat(obs1$, obs2$);

obs$.subscribe({
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
