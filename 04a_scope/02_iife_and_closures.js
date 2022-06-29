'use strict'

console.log("EXAMPLE A")


// To understand iife and closures, let's first look at a problem we need to solve. 

// The problem - We want to create a counter function, counter that increments the counter by 1
// each time it's called. 

// attempt1 - here we create a global variable, and a simple function to increment it. 
let counter = 0

// Function to increment counter
function add() {
  counter += 1
  return counter
}

// Call add() 3 times
console.log(add()) // 1
console.log(add()) // 2
console.log(add()) // 3


// however since we're using a global variable, this counter can easily be abused,
// by updating the counter value directly. 
counter = 200
console.log(add()) // 201



console.log("EXAMPLE B")
// attempt2 - to fix that we could trying creating the counter variable inside the add() function:


function addB() {
  let counter = 0
  counter += 1
  return counter
}

console.log(addB()) // 1
console.log(addB()) // 1
console.log(addB()) // 1

// this makes it worse, because the counter gets reset each time add() is called.

// So we need some way to create our counter variable outside the add() function 
// but also so that only our add() can access+update.  







// Therefore, we need some way for us to for our "add" function, to
// 1. set an initial starting counter
// 2. increment the counter
// 3. Keep track of the state of the updated counter value.


// This is possible by using a combination of:
// 1. IIFE - (used for setting the initial counter value)
// 2. closures - (used for keeping track of the counter's current state)

// Reference - https://www.w3schools.com/js/js_function_closures.asp