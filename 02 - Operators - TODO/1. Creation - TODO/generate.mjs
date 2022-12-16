/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { generate } from 'rxjs';

const obs$ = generate(
  0, // initial
  x => x < 10, // condition
  x => x + 4, // iterate
  x => x + 1 // result
);

obs$.subscribe(val => console.log(val));

// 1
// 5
// 9
