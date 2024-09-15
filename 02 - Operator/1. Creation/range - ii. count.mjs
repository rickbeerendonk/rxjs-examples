/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { range } from 'rxjs';

const obs$ = range(3);

// MARBLES:
// -0-1-2|

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 0
// 1
// 2
// Complete!
