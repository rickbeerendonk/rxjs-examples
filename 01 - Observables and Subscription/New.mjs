/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Observable } from 'rxjs';

const obs$ = new Observable(subscriber => {
  subscriber.next('One');
  subscriber.next('Two');
  subscriber.complete();
});

// MARBLES:
// -One-Two|

obs$.subscribe({
  next: val => console.log(val),
  error: err => console.error(err),
  complete: () => console.log('Complete!')
});

// One
// Two
// Complete!
