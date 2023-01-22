/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { interval, map, take, race } from 'rxjs';

const obs1$ = interval(1000)
  .pipe(map(i => 2 * i + 1)) // 1, 3, 5
  .pipe(take(3));
const obs2$ = interval(500)
  .pipe(map(i => 2 * i + 2)) // 2, 4, 6
  .pipe(take(3));

const obs$ = race(obs1$, obs2$);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 2 (after  500 ms)
// 4 (after 1000 ms)
// 6 (after 1500 ms)
// Complete!
