/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { of, ignoreElements } from 'rxjs';

// Only results in Complete or Error
const obs$ = of(1, 2, 3, 4, 5).pipe(ignoreElements());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: err => console.eror(err)
});

// Complete!
