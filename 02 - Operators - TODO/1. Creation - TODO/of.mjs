/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { of } from 'rxjs';

const obs = of(1, 2, 3, 'a', 'b', 'c');

obs.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 1
// 2
// 3
// a
// b
// c
// Complete!
