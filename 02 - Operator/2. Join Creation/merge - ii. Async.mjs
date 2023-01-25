/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { merge, interval, map, take } from 'rxjs';

const obs1$ = interval(1000)
  .pipe(map(i => 2 * i + 1)) // 1, 3, 5
  .pipe(take(3));
const obs2$ = interval(400)
  .pipe(map(i => 2 * i + 2)) // 2, 4, 6
  .pipe(take(3));

const obs$ = merge(obs1$, obs2$);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 2 (after  400 ms)
// 4 (after  800 ms)
// 1 (after 1000 ms)
// 6 (after 1200 ms)
// 3 (after 2000 ms)
// 5 (after 3000 ms)
// Complete!
