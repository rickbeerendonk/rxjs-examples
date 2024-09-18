/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const obs1$ = from([1, 2, 3, 4]);
const obs2$ = obs1$.pipe(scan((acc, value, index) => acc + value));
//const obs2$ = obs1$.pipe(reduce((acc, value, index) => acc + value));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 3
// 6
// 10
// Complete!
