/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// Subject = Type of Observable which shares a single execution path among observers

import { Subject } from 'rxjs';

const sub = new Subject();

sub.next('one');

sub.subscribe(value => {
  console.log('Subscriber 1:', value);
});

sub.next('two');

sub.subscribe(x => {
  console.log('Subscriber 2:', x);
});

sub.next('three');

sub.complete();

sub.next('four');

// Subscriber 1: two
// Subscriber 1: three
// Subscriber 2: three
