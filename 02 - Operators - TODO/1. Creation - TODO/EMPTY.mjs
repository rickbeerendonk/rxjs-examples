/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { EMPTY } from 'rxjs';

const obs$ = EMPTY;

obs$.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});
