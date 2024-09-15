/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { range } from 'rxjs';

const obs$ = range();

// MARBLES:
// |

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Complete!
