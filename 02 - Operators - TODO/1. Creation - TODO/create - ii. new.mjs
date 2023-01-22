/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Observable } from 'rxjs';

const obs$ = new Observable(subscriber => {
  subscriber.next('One');
  subscriber.next('Two');
  subscriber.complete();
});

// -One-Two|

obs$.subscribe(val => console.log(val));

// One
// Two
