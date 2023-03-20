/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, combineLatest } from 'rxjs';

const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);

const obs$ = combineLatest([obs1$, obs2$]);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// [3, 4]
// [3, 5]
// [3, 6]
// Complete!
