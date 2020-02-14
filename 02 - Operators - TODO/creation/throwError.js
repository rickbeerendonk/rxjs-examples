/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const { throwError } = require('../../node_modules/rxjs');

const obs = throwError(new Error('Something went wrong!'));

obs.subscribe({
  error: err => console.error('Error message received: ' + err)
});
