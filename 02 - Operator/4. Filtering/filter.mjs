/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, filter } from 'rxjs';

const obs$ = of(1, 6, 2, 5, 3, 4).pipe(filter(value => value < 4));

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// Complete!
