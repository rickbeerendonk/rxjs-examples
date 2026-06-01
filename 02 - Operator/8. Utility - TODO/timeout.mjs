/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { interval } from 'rxjs';
import { timeout, take } from 'rxjs/operators';

interval(100)
  .pipe(take(3), timeout({ each: 80 }))
  .subscribe({
    next: val => console.log(val),
    error: err => console.log(err.name),
    complete: () => console.log('Complete!')
  });

// TimeoutError
