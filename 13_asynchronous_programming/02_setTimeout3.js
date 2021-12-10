'use strict'

// the previous example can be rewritten like this:

console.log("hello 1")

// this time we're passing in a third and fourth argument into the setTimeout function. 
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
setTimeout((msg, number) => console.log(msg, number), 3000, "hello", "2")
console.log("hello 3")

