/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { count } from 'rxjs/operators';

const obs1$ = from([1, 3, 5, 7]);
const obs2$ = obs1$.pipe(count(x => x < 6));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 3
// Complete!
