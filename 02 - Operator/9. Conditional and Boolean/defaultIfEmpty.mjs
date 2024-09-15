/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { defaultIfEmpty, EMPTY, of } from 'rxjs';

const obs1$ = of(1, 2).pipe(defaultIfEmpty(99));

obs1$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete 1')
});

// 1
// 2
// Complete 1

const obs2$ = EMPTY.pipe(defaultIfEmpty(99));

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete 2')
});

// 99
// Complete 2
