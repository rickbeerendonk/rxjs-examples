/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { zip, interval, map, take } from 'rxjs';

const obs1$ = interval(1000)
  .pipe(map(i => 2 * i + 1)) // 1, 3, 5
  .pipe(take(3));
const obs2$ = interval(400)
  .pipe(map(i => 2 * i + 2)) // 2, 4, 6
  .pipe(take(3));

const obs$ = zip(obs1$, obs2$);

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// [1, 2] (after 1000 ms)
// [3, 4] (after 2000 ms)
// [5, 6] (after 3000 ms)
// Complete!
