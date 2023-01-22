/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { throwError, ignoreElements } from 'rxjs';

// Only results in Complete or Error
const obs$ = throwError(() => 'Mistake!').pipe(ignoreElements());

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: err => console.error(err)
});

// Complete!
