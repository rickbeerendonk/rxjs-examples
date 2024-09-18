/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { concat, interval, map, take } from 'rxjs';

const obs1$ = interval(1000)
  .pipe(map(i => 2 * i + 1)) // 1, 3, 5
  .pipe(take(3));
const obs2$ = interval(400)
  .pipe(map(i => 2 * i + 2)) // 2, 4, 6
  .pipe(take(3));

const obs$ = concat(obs1$, obs2$);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1 (after 1000 ms)
// 3 (after 2000 ms)
// 5 (after 3000 ms)
// 2 (after 3400 ms)
// 4 (after 3800 ms)
// 6 (after 4200 ms)
// Complete!
