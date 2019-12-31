const { empty } = require('../../node_modules/rxjs');

const obs = empty();

obs.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});
