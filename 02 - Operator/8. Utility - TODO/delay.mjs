/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

of('A', 'B')
  .pipe(delay(1000))
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// A
// B
// Complete!
