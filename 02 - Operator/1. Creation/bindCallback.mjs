/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { bindCallback } from 'rxjs';

const toUpper = (value, callback) => {
  callback(value.toUpperCase());
};

const toUpper$ = bindCallback(toUpper);

toUpper$('rxjs').subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// RXJS
// Complete!
