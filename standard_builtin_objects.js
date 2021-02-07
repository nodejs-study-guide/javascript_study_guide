// Here's an object I specifically created
person = {
  name: 'john',
  age: 32
}

// However standard built-in objects already exists in your javascript runtime without specifically declaring them first. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// e.g the "Math" object:

console.log(typeof Math)     // object
console.log(Math.PI)         // 3.141 
console.log(Math.sqrt(16))   // 44

// Some of these builtin objects are actually just builtin fucntions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(typeof Date)  // function

y = new Date() 




console.log(typeof y)    // object

console.log(y.toDateString()) // Sun Feb 07 2021
