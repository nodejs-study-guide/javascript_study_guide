// Here's an iife that gets stored in a variable called
// "greetings". However the 'message' variable's value doesn't 
// persist inside after the iife initial execution. 

let greetings = (function() {
  let message = 'Hello'
  console.log("The message is " + message) // The message is Hello
  let getMessage = function() {
    return message;
  }
})()

console.log(greetings) // undefined
console.log(greetings.message) // undefined
console.log(greetings()) // undefined




// To get round this, we use "closures" 
// (this is just addding the 2nd return statement codeblock)

let greetings = (function() {
  let message = 'Hello'
  console.log("The message is " + message) // The message is Hello
  let getMessage = function() {
    return message;
  }
  return {
    getFinalMessage: getMessage,
  }
})()

console.log(greetings.getFinalMessage()) // Hello



// example 2  - closure - variable gets stored inside function and get's updated. 
function setupCounter(val){
  return function counter() {
    return val++;
  }
}


let counter0 = setupCounter(0);
console.log(counter0());  // 0
console.log(counter0());  // 1
console.log(counter0());  // 2

let counter10 = setupCounter(10);
console.log(counter10());  // 10
console.log(counter10());  // 11
console.log(counter10());  // 12
