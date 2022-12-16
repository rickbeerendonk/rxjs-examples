/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { iif, of } from 'rxjs';

const obs1$ = iif(() => false, of(1, 2, 3), of('a', 'b', 'c'));

obs1$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// a
// b
// c
// Complete!

const obs2$ = iif(() => true, of(1, 2, 3), of('a', 'b', 'c'));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// Complete!
