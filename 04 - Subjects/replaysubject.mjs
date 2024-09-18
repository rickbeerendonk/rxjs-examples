/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// Subscribers will receive all values
// that the ReplaySubject had BEFORE subscribing.
// With normal Subjects subscriptions only receive
// new values AFTER subscribing.

import { ReplaySubject } from 'rxjs';

const sbj = new ReplaySubject();

sbj.next('one');

sbj.subscribe(value => {
  console.log('Subscriber 1:', value);
});

sbj.next('two');

sbj.subscribe(value => {
  console.log('Subscriber 2:', value);
});

sbj.next('three');

// Subscriber 1: one
// Subscriber 1: two
// Subscriber 2: one
// Subscriber 2: two
// Subscriber 1: three
// Subscriber 2: three
