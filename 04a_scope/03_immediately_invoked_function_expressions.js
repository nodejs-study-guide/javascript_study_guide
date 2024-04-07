'use strict'

console.log("EXAMPLE A")


// A reminder of a regular function
function greetingA() {
  return 'Hello A'
}

let msg = greetingA()
console.log(msg) // Hello A




console.log("EXAMPLE B");

// Note I have to end the above line with a semi-colon, that's because the next line starts with '('


// IIFE - immediately invoked function expression
// IIFE equivalent of the above
(function greetingB() {
  console.log('Hello B')
})()
// the above prints "Hello B" straight away.

// At the moment, what's the point of using IIFE, it seems a bit pointless. However it does make
// sense when using IIFE in conjunction with "closures" which we'll cover next.

console.log("EXAMPLE B1");
// the function name is actually optional:

(function(msg) {
  console.log(msg)
})('Hello B1')
// the above prints "Hello B1" straight away.

// the last round brackets can be used to pass in arguments to the function.


console.log("EXAMPLE C1")

// this output's the result from the execution of the IIFE and stores it in the variable.
let greetingC1var = (function greetingC1() {
  return 'Hello C1'
})()

console.log(typeof greetingC1var) // string
console.log(greetingC1var) // Hello C1

// note again, the function name is optional:
console.log("EXAMPLE C2")

let greetingC2var = (function() {
  return 'Hello C2'
})()

console.log(typeof greetingC2var) // string
console.log(greetingC2var) // Hello C2
