/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, every } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5).pipe(every(val => val < 6));

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// true
// Complete!
