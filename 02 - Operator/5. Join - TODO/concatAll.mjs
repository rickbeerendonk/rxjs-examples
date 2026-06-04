/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { of, interval } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

of(
  interval(40).pipe(
    take(2),
    map(v => 'A' + v)
  ),
  interval(40).pipe(
    take(2),
    map(v => 'B' + v)
  )
)
  .pipe(concatAll())
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// A0
// A1
// B0
// B1
// Complete!
