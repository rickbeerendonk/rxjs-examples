/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { of, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

let attempt = 0;

const obs$ = of('Request').pipe(
  map(req => {
    attempt++;
    if (attempt < 3) {
      // Simulate an error on the first two attempts
      throw new Error(`Attempt ${attempt}: Failed`);
    } else {
      // Succeed on the third attempt
      return `Attempt ${attempt}: Success`;
    }
  }),
  retry(2), // Retry up to 2 times
  catchError(err => of(`Final Error after ${attempt} attempts: ${err.message}`))
);

// Marbles diagram:
// obs$: ---# retry(2) ---# retry(1) ---'Attempt 3: Success'---|
// If all retries fail:
// obs$: ---# ---# ---# 'Final Error after 3 attempts: Attempt 3: Failed'---|

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Attempt 3: Success
// Complete!
