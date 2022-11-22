/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { timer } from 'rxjs';

const obs = timer(3000);

obs.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// 0 (after 3 seconds)
// Complete!
