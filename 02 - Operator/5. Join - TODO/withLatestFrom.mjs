/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { of } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const obs1$ = of(1, 2, 3);
// Marbles for obs1$:
// ---1---2---3|

const obs2$ = obs1$.pipe(withLatestFrom('a', 'b'));

// Marbles for obs2$:
// ---[1,'a','b']---[2,'a','b']---[3,'a','b']|

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Output:
// [1, 'a', 'b']
// [2, 'a', 'b']
// [3, 'a', 'b'];
// Complete!
