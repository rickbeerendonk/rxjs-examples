/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Observable } from 'rxjs';

const obs$ = new Observable(function (observer) {
  observer.next('One');
  observer.next('Two');
  observer.complete();
});

obs$.subscribe(val => console.log(val));

// One
// Two
