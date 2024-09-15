/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { of, timer } from 'rxjs';
import { retry, catchError, map, delayWhen, take } from 'rxjs/operators';

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
  retry({
    count: 2,
    delay: 1000
  }),
  catchError(err => of(`Final Error after ${attempt} attempts: ${err.message}`))
);

// Marbles diagram:

// First Attempt:
// obs$: ---#
// retry delays 1s
// Second Attempt:
// obs$:    ---1s---#
// retry delays 1s
// Third Attempt:
// obs$:           ---1s---'Attempt 3: Success'---|

// If all retries fail:
// obs$:           ---1s---#
//                     retryWhen completes
// obs$: ---1s---1s---#
// catchError handles the error

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// (After ~2 seconds)
// Attempt 3: Success
// Complete!
