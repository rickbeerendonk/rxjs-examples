/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// Subscribers will receive only the last value
// that the AsyncSubject had BEFORE completion.
// With normal Subjects subscriptions only receive
// new values AFTER subscribing.

import { AsyncSubject } from 'rxjs';

const sbj = new AsyncSubject();

sbj.next('one');

sbj.subscribe(value => {
  console.log('Subscriber 1:', value);
});

sbj.next('two');

sbj.subscribe(value => {
  console.log('Subscriber 2:', value);
});

sbj.next('three');

sbj.complete();

// Subscriber 1: three
// Subscriber 2: three
