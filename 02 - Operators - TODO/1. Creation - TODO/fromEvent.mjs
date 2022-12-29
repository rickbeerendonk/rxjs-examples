/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { EventEmitter } from 'events';
import { fromEvent } from 'rxjs';

const myEventEmitter = new EventEmitter();

// myEventEmitter.on('dummyEvent', data => {
//   console.log('--remove--', data);
// });

const obs$ = fromEvent(myEventEmitter, 'dummyEvent');

obs$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!')
});

// Trigger event
myEventEmitter.emit('dummyEvent', 'Dummy 1');
myEventEmitter.emit('dummyEvent', 'Dummy 2');

// Dummy 1
// Dummy 2
