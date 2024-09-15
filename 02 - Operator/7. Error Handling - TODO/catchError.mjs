/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const obs1$ = throwError(() => new Error('Something went wrong!')).pipe(
  catchError(err => of('Caught error: ' + err.message))
);
const obs2$ = obs1$.pipe(catchError(err => of('Caught error: ' + err.message)));

// MARBLES:
// obs1$: ---#
// obs2$: ---'Caught error: Something went wrong!'---|

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Output:
// Caught error: Something went wrong!
// Complete!
