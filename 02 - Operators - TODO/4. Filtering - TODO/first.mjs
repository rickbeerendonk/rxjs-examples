/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, first } from 'rxjs';

const obs$ = of('a', 'b', 'c').pipe(first());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// a
// Complete!
