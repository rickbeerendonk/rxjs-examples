/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { EMPTY, isEmpty, of } from 'rxjs';

const obs1$ = of(1).pipe(isEmpty());

obs1$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete 1')
});

// false
// Complete 1

const obs2$ = EMPTY.pipe(isEmpty());

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete 2')
});

// true
// Complete 2
