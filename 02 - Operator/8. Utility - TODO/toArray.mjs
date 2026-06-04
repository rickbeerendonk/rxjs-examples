/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

from([1, 2, 3, 4])
  .pipe(
    map(val => val * 2),
    toArray()
  )
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// [2, 4, 6, 8]
// Complete!
