// Run this script from the command line like this:
// node arrow_functions.js




// Example A
// A regular anonymous-function

let greetingsA = function() {
  return 'Hello World - A';
};

let messageA = greetingsA();
console.log(messageA);      // Hello World



// Example B
// arrow function equivalent (just the first line is different)
// the empty bracket means that there's no input parameters. 

let greetingsB = () => {
  return 'Hello World - B';
};

let messageB = greetingsB();
console.log(messageB);      // Hello World


// Example C
// Since the code block only has one line, you can make it even shorter
// by removing the curly braces and return key word

let greetingsC = () =>  'Hello World - C';

let messageC = greetingsC();
console.log(messageC);      // Hello World



// Example D
// Now lets take a look at converting a regular-function (which has one parameter)
// into an arrow function
let greetD = function greetingsD(name) {
  return 'Hello ' + name
}

let messageD = greetD('JohnD');
console.log(messageD);        // Hello JohnD


// Example E
// now the arrow-function equivalent
// notice we no longer needed to create the "greet" variable
let greetingsE = (name) => {
  return 'Hello ' + name
}

let messageE = greetingsE('JohnE');
console.log(messageE);        // Hello JohnE 



// Example F
// Also when you have just one input parameter, 
// then you can also get rid of the round brackets as well

// now the arrow-function equivalent
let greetingsF = name => {
  return 'Hello ' + name
}

let messageF = greetingsF('JohnF');
console.log(messageF);        // Hello John 

// Example G
// arrow functions with 2 or more input parameters. 
// here's the regular function
function sumG(num1, num2) {
  return num1 + num2;
}
let outputG = sumG(5,10)
console.log(outputG);        // 15


// Example H
// arrow-function equivalent
let sumH = (num1, num2) => {
  return num1 + num2;
}
let outputH = sumH(7,10)
console.log(outputH);        // 17




// Example I
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

