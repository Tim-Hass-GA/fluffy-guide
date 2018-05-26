const fetch = require('node-fetch');
// const co = require('co');

// do the call - see if you get the json object back
// decompose the json object for the values you need
/*
fetch('http://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(post => post.title)
.then( x => console.log('Title: ', x))
*/

///////////
// *() means a generator function
// both fetch and json returns a promise the yield keyword allows
// the generator to handle the response of the promise back to the co function
// because the generator function doesn't know what the THING returned
// co will resolve the promise and give the "THING" back into the function
// the result will be assigned to the cooresponding const.

///////////
// co(function *() {
//   const url = 'http://jsonplaceholder.typicode.com/posts/1';
//   const response = yield fetch(url);
//   const post = yield response.json();
//   const title = post.title
//   console.log("title: ",title);
// })

// run(function *() {
//   const url = 'http://jsonplaceholder.typicode.com/posts/1';
//   const response = yield fetch(url);
//   const post = yield response.json();
//   const title = post.title;
//   console.log("title: ",title);
// })

// function run(generator){
//   const iterator = generator();
//   const iteration = iterator.next();
//   const promise = iteration.value;
//   promise.then( response => {
//     const anotherIterator = iterator.next(response);
//     const anotherPromise = anotherIterator.value;
//     anotherPromise.then( post => iterator.next(post));
//   });
// }


/////////////
///////////// REFACTORED TO
/////////////
run(function *() {
  const url = 'http://jsonplaceholder.typicode.com/posts/1';
  const response = yield fetch(url);
  const post = yield response.json();
  const title = post.title;
  return title;
})
.catch( error => console.error(error.stack))
.then( x => console.log('run resulted in ', x));

function run(generator){
  const iterator = generator();
  function iterate(iteration) {
    if (iteration.done) return iteration.value;
    const promise = iteration.value;
    return promise.then( x => iterate(iterator.next(x)));
    };
  return iterate(iterator.next());
}
