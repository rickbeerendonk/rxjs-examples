/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { interval } from 'rxjs';

const obs$ = interval(1000);

// MARBLES:
// -0-1-2-3-...

const subscription = obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);

// 0 (after 1 second)
// 1 (after 2 second)
// 2 (after 3 second)
// (nothing more after 3.5 second, not even "Complete!")
