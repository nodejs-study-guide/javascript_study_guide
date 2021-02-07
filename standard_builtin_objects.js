// Here's an object I specifically created
person = {
  name: 'john',
  age: 32
}

// However standard built-in objects already exists in your javascript runtime without specifically declaring them first. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// e.g the "Math" object:

console.log(typeof Math)     // object

// here we're accessing one of Math object's property
console.log(Math.PI)         // 3.141 

// here we're accessing one of it's methods 
console.log(Math.sqrt(16))   // 44






// Some of these builtin objects are actually just builtin functions, e.g. "Date"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(typeof Date)  // function


// you can call some special methods called "static methods" directly on this builtin function 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#static_methods

console.log(Date.now())  // 1612720322842


// However to use the 'protoytpe' functions you have to create a "Date" object and apply the function to that object
y = new Date() 

// I think the "new" indicates that this is a constructor function - https://github.com/Sher-Chowdhury/javascript_study_guide/blob/main/constructor_functions.js

console.log(typeof y)    // object

console.log(y.toDateString()) // Sun Feb 07 2021
