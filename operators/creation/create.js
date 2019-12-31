const { Observable } = require('../../node_modules/rxjs');

const obs = Observable.create(function(observer) {
  observer.next('One');
  observer.next('Two');
  observer.complete();
});

obs.subscribe(val => console.log(val));

// One
// Two
