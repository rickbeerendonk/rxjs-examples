/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

of('A', 'B')
  .pipe(endWith('Done'))
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// A
// B
// Done
// Complete!
