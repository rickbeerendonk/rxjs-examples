/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defer, from } from 'rxjs';

const obs1$ = from([1, 3, 5]);
const obs2$ = from([10, 20, 30]);

let condition;

const obs3$ = defer(() => (condition ? obs1$ : obs2$));

// obs3$: condition = false

condition = false;

obs3$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// obs3$: condition = true

condition = true;

obs3$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 10
// 20
// 30
// Complete!
// 1
// 3
// 5
// Complete!
