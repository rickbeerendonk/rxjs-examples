/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { interval } from 'rxjs';

const obs = interval(1000);

obs.subscribe(val => console.log(val));

// 0 (after 1 second)
// 1 (after 2 second)
// 2 (after 3 second)
// 3 (after 4 second)
// ... etc.
