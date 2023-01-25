/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const obs1$ = from([1, 2, 3, 4]);
const obs2$ = obs1$.pipe(map((value, index) => value + index));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 3
// 5
// 7
// Complete!
