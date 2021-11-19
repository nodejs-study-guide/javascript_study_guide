'use strict'

// As a reminder, here's a couple of examples of user defined objects. 
let message = "hello";
function Greetings(name) {
  return "Hello " + name
}



// The "message" object only exist because I declared it above. 
// Similarly the "Greetings" object only exists because I defined it. 
// However the javascript runtime comes with a collection of objects already builtin in. 
// I.e. they exist without me needing to define/declare
// them upfront. You can find them here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// e.g the "Math" object:

console.log(typeof Math)     // object


// here we're accessing one of Math object's property
console.log(Math.PI)         // 3.141 

// here we're accessing one of it's methods 
console.log(Math.sqrt(16))   // 4





// Some of these builtin objects are actually just builtin functions, e.g. "Date"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(typeof Date)  // function

console.log(typeof Number)   // function      - Note the builtin object "Number" is not the same thing as the data type, "number"



// you can call some special methods called "static methods" directly on this builtin function 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#static_methods

console.log(Date())  // Fri Nov 19 2021 16:06:48 GMT+0000 (Greenwich Mean Time)
console.log(Date.now())  // 1612720322842


// However to use the 'protoytpe' functions you have to create a "Date" object and apply the function to that object
let y = new Date()

// I think the "new" indicates that this is a constructor function - https://github.com/Sher-Chowdhury/javascript_study_guide/blob/main/constructor_functions.js

console.log(typeof y)    // object

console.log(y.toDateString()) // Sun Feb 07 2021


// You can think of a builtin object's properties and methods as a set of general purpose properties and methods
