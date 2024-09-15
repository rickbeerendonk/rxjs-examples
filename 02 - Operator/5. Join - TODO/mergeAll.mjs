/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { of, mergeAll } from 'rxjs';

const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);

// Higher order "observable" that emits the two observables
const higherOrder$ = of(obs1$, obs2$);

const obs$ = higherOrder$.pipe(mergeAll());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// 4
// 5
// 6
// Complete!
