/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, elementAt } from 'rxjs';

const obs$ = of('a', 'b', 'c').pipe(elementAt(1));

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// b
// Complete!
