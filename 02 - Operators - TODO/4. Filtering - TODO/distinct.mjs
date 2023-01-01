/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, distinct } from 'rxjs';

const obs$ = of(1, 1, 2, 4, 3, 3, 2, 1).pipe(distinct());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 4
// 3
// Complete!
