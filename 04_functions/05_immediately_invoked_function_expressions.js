console.log("EXAMPLE A")


// A reminder of a regular function
function greetingA() {
  return 'Hello A'
}

let msg = greetingA() 
console.log(msg) // Hello A




console.log("EXAMPLE B");

// Note I have to end the above line with a semi-colon, otherwise I get a syntax error,
// when the iife code runs below. 


// IIFE - immediately invoked function expression
// IIFE equivalent of the above 
(function greetingB() {
  console.log('Hello B')
})()
// the above prints "Hello B" straight away. 


console.log("EXAMPLE B1");
// the function name is actually optional:

(function() {
  console.log('Hello B1')
})()
// the above prints "Hello B1" straight away. 


console.log("EXAMPLE C1");
// note above semi-colon again. 

// this output the reult from the execution of the IIFE and stores it in the variable.  
let greetingC1var = (function greetingC1() {
  return 'Hello C1'
})();

console.log(typeof greetingC1var) // string
console.log(greetingC1var) // Hello C

// note again, the function name is optional:
console.log("EXAMPLE C2");
// note above semi-colon again. 
 
let greetingC2var = (function() {
  return 'Hello C2'
})();

console.log(typeof greetingC2var) // string
console.log(greetingC2var) // Hello C

// note again, the function name is optional







// also see closures
