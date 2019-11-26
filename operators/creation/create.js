const { Observable } = require('../../node_modules/rxjs');

const hello = Observable.create(function(observer) {
  observer.next('One');
  observer.next('Two');
  observer.complete();
});

const subscribe = hello.subscribe(val => console.log(val));

// One
// Two