/*
A variables that's storing a function, has a number of builtin methods already avaiable. 
One of which is the call() method. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

This method lets you feed inject an object {struct} into a function, and that object exists
in the form of a "this" object. 
*/

let person1 = {
  name: 'John',
  age: 22,
}

let person2 = {
  name: 'Mary',
  age: 34,
}

let greetings = function(){
  console.log('Hello ' + this.name);
};

greetings.call(person1); // Hello John
greetings.call(person2); // Hello Mary




// You can also use the call method to pass in any input parameters that the function needs:

let person1 = {
  name: 'John',
  age: 22,
}

let greetings = function(message){
  console.log(message + ' ' + this.name);
};

greetings.call(person1, "Hello");   // Hello John
