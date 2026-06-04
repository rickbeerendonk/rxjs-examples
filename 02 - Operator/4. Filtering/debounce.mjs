/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { interval, timer } from 'rxjs';
import { debounce, take } from 'rxjs/operators';

interval(40)
  .pipe(
    take(6),
    debounce(value => timer(value < 4 ? 50 : 10))
  )
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// 5
// Complete!
