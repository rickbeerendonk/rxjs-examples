/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, takeWhile } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 2, 1).pipe(takeWhile(val => val < 4));

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// Complete!
