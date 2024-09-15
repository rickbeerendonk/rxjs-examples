/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { of, combineLatestAll, from } from 'rxjs';

const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);

// Create a higher-order observable using from() that emits each observable separately
const higherOrder$ = from([obs1$, obs2$]);

// Use combineLatestAll to combine the latest values from the inner observables
const obs$ = higherOrder$.pipe(combineLatestAll());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// [3, 4]
// [3, 5]
// [3, 6]
// Complete!
