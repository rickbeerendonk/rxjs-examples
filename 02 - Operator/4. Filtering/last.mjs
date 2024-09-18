/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, last } from 'rxjs';

const obs$ = of('a', 'b', 'c').pipe(last());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// c
// Complete!
