/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// Subject = Type of Observable which shares a single execution path among subscribers

import { Subject } from 'rxjs';

const sbj = new Subject();

sbj.next('one');

sbj.subscribe(value => {
  console.log('Subscriber 1:', value);
});

sbj.next('two');

sbj.subscribe(x => {
  console.log('Subscriber 2:', x);
});

sbj.next('three');

sbj.complete();

sbj.next('four');

// Subscriber 1: two
// Subscriber 1: three
// Subscriber 2: three
