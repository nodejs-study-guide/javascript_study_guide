// A regular anonymous-function

let greetings = function() {
  return 'Hello World';
};

let message = greetings();
console.log(message);      // Hello World



// arrow function equivalent (just the first line is different)
// the empty bracket means that there's no input parameters. 

let greetings = () => {
  return 'Hello World';
};

let message = greetings();
console.log(message);      // Hello World


// Since the code block only has one line, you can make it even shorter
// by removing the curly braces and return key word

let greetings = () =>  'Hello World';

let message = greetings();
console.log(message);      // Hello World



// Now lets take a look at converting a regular-function (which has one paraemter)
// into an arrow function
let greet = function greetings(name) {
  return 'Hello ' + name
}

let message = greet('John');
console.log(message);        // Hello John 


// now the arrow-function equivalent
// notice we no longer needed to create the "greet" variable
let greetings = (name) => {
  return 'Hello ' + name
}

let message = greetings('John');
console.log(message);        // Hello John 



// Also when you have just one input parameter, 
// then you can also get rid of the round brackets as well

// now the arrow-function equivalent
let greetings = name => {
  return 'Hello ' + name
}

let message = greetings('John');
console.log(message);        // Hello John 


// arrow functions with 2 or more input parameters. 
// here's the regular function
function sum(num1, num2) {
  return num1 + num2;
}
let output = sum(5,10)
console.log(output);        // 15


// arrow-function equivalent
let sum = (num1, num2) => {
  return num1 + num2;
}
let output = sum(7,10)
console.log(output);        // 17





// The "this" keyword doesn't exist in arrow-functions.
// If you try to use it, then it ends up resolving to the 
// global window "this" object:


let message = {
  name: 'John',
  regularAnonymousFunction: function() {
    console.log(this)
    console.log('Hello ' + this.name)
  },
  arrowFunction: () => {
    console.log(this)
    console.log('Hi ' + this.name)
  }

}


message.regularAnonymousFunction()
message.arrowFunction()





