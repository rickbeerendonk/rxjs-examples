/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

const obs1$ = from([3, 7, 1, 5]).pipe(reduce((acc, value) => acc + value)); // Sum

obs1$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 16
// Complete!

const obs2$ = from(['Greetings', 'from', 'rxjs']).pipe(
  reduce((acc, value) => `${acc} ${value}`)
); // Concat

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Greetings from rxjs
// Complete!
