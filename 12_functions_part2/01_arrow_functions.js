// Run this script from the command line like this:
// node arrow_functions.js


// Arrow functions are "Anonymous function" with it's own unique syntax. 

console.log("EXAMPLE A")
// First, here's a reminder of what a regular anonymous-function looks like

let greetingsA = function() {
  return 'Hello World - A'
}

let messageA = greetingsA()
console.log(messageA)      // Hello World



console.log("EXAMPLE B")
// Now, here's the arrow function equivalent (just the first line is different)
// the empty bracket means that there's no input parameters. 

let greetingsB = () => {
  return 'Hello World - B'
};

let messageB = greetingsB()
console.log(messageB)      // Hello World


console.log("EXAMPLE C")
// Since the code block only has one line, you can make it even shorter
// by removing the curly braces and the "return" key word

let greetingsC = () =>  'Hello World - C'
let messageC = greetingsC()
console.log(messageC)      // Hello World - C


console.log("EXAMPLE C1")
// You can also use "_" instead of "()". This just means, you don't 
// care about input parameters. It's a bit like golang, where you use it to
// discard return values from a function

let greetingsC = _ =>  'Hello World - C'
let messageC = greetingsC()
console.log(messageC)      // Hello World - C

console.log("EXAMPLE D")
// Here's one with an input parameter

let greetingsD = (firstName) => {
  return 'Hello ' + firstName
}


let messageD = greetingsD("Clark");
console.log(messageD);      // Hello Clark





console.log("EXAMPLE F")
// Also when you have just one input parameter, 
// then you can also get rid of the round brackets as well

// now the arrow-function equivalent
let greetingsF = firstName => {
  return 'Hello ' + firstName
}

let messageF = greetingsF('John');
console.log(messageF);        // Hello John 

console.log("EXAMPLE G")
// arrow functions with 2 or more input parameters. 
// here's the regular function
function sumG(num1, num2) {
  return num1 + num2;
}
let outputG = sumG(5,10)
console.log(outputG);        // 15


console.log("EXAMPLE H")
// arrow-function equivalent
let sumH = (num1, num2) => {
  return num1 + num2;
}
let outputH = sumH(7,10)
console.log(outputH);        // 17




console.log("EXAMPLE I")
// The "this" keyword doesn't exist in arrow-functions.
// If you try to use it, then it ends up resolving to the 
// global window "this" object:


let messageI = {
  name: 'JohnI',
  regularAnonymousFunctionI: function() {
    console.log(this)
    console.log('Hello ' + this.name)
  },
  arrowFunctionI: () => {
    console.log(this)
    console.log('Hi ' + this.name)
  }

}


messageI.regularAnonymousFunctionI()
messageI.arrowFunctionI()


console.log("EXAMPLE J")
// Unlike regular functions, the builtin "arguments" variable doesn't exist inside arrow function. 

let sumJ = (num1, num2) => {
  console.log(arguments) // outputs the "global window object". In a regular function
                         // the output would have been: [Arguments] { '0': 7, '1': 10 }
  return num1 + num2;
}
let outputJ = sumJ(7,10)
console.log(outputJ);        // 17

console.log(this) // prints out the global window's "this" object