/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { of } from 'rxjs';
import { mergeWith } from 'rxjs/operators';

of('A1', 'A2')
  .pipe(mergeWith(of('B1', 'B2')))
  .subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!')
  });

// A1
// A2
// B1
// B2
// Complete!
