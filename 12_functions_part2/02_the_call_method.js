'use strict'
/*
A variables that's storing a function (aka function expression), has a number of builtin methods already avaiable. 
One of which is the call() method. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

This method lets you feed inject an object {struct} into a function, and that object exists
in the form of a "this" object. 
*/

// Let's start with a simple function-expression example
console.log("EXAMPLE A")

let Jonny = {
  name: 'John',
  age: 22,
}
let greetingsA = function(person){
  console.log(this)  // undefined
  console.log('Hello ' + person.name)
}
greetingsA(Jonny) // Hello John

// This function accepts 1 input parameter, person. 


console.log("EXAMPLE B")
// However, another way to do this is pass in the input parameter as a "this" object. 
// That's done by calling the "call" method on the function. 
// All functons comes with this "call" method builtin. 
// This "call" method simply populates the "this" variable with the provided content.  

let greetingsB = function(){
  console.log(this)                   // { name: 'John', age: 22 }
  console.log('Hello B - ' + this.name);
}

// Notice we're applying the call method here. 
greetingsB.call(Jonny); // Hello John



console.log("EXAMPLE C")
// This also works for regular functions 

// notice this time our functions accepts the msg input parameter 
function greetingsC(msg){
  console.log(this)                   // { name: 'John', age: 22 }
  console.log(msg + this.name);
}

// the call method's first parameter is what will get saved to the "this" object. 
// all the remaining arguments are mapped to the function's input parameters. 
greetingsC.call(Jonny, 'Hello C - ')   // Hello John


// Functions also comes with a few other builtin methods in addition to the call, method. 
// e.g. the "bind" and "apply" methods. We'll cover them next. 