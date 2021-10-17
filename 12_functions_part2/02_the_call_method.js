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
  console.log('Hello B -' + this.name);
}

// Notice we're applying the call method here. 
greetingsB.call(Jonny); // Hello John



console.log("EXAMPLE C")
// This also wors for regular functions 

function greetingsC(msg){
  console.log(this)                   // { name: 'John', age: 22 }
  console.log( msg + this.name);
}

// Notice we're applying the call method here. 
greetingsC('Hello C - ').call(Jonny); // Hello John


// Functions also comes with a fiew other methods in addition 