/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, skipLast, interval } from 'rxjs';

const obs$ = interval(1000).pipe(skipLast(2));
//const obs$ = of(1, 2, 3, 4, 5).pipe(skipLast(2));

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// Complete!
