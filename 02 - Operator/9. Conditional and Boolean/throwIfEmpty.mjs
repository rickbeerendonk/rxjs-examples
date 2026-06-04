/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { EMPTY } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';

EMPTY.pipe(throwIfEmpty(() => new Error('No values'))).subscribe({
  next: val => console.log(val),
  error: err => console.log(err.message),
  complete: () => console.log('Complete!')
});

// No values
