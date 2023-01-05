/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, single } from 'rxjs';

// Error: "Too many matching values"
//const obs$ = of('a', 'b', 'c').pipe(single());

// Error: "No elements in sequence"
//const obs$ = of().pipe(single());

// OK
const obs$ = of('a').pipe(single());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// a
// Complete!
