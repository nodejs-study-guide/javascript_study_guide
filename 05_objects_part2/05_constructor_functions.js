// node constructor_functions.js

// You can create several object (of the same structure) like this:

let person1 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 23,
  eyeColor: 'brown',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person1)

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 45,
  eyeColor: 'brown',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person2)


let person3 = {
  firstName: 'Mike',
  lastName: 'Greenwood',
  age: 35,
  eyeColor: 'blue',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person3)









// This is very repetitive, and hard to maintain if you have 100s of objects. Hence better to you use a constructor like this instead:

// notice there's no return statement 
function person (firstName, lastName, age, eyeColor){
  this.firstName= firstName
  this.lastName= lastName
  this.age= age
  this.eyeColor= eyeColor
  this.greetings= function(salute){return salute + ' ' + this.firstName + ' ' + this.lastName} 
}

// The "new" keyword captures the object stored inside "this" 
let person4 = new person('John','Smith',23,'brown')

console.log(person4)
let message = person4.greetings('hi')
console.log(message)



// More notes:

// So far we created an object on the fly. An "object constructor function" is function that let's you defined a blueprint of an object, which you can use and reuse to create multiple objects with.

// https://www.w3schools.com/js/js_object_constructors.asp

// Here's an exmaple:

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.currentAge = age;
  this.eyeColor = eye;
}
// Then create an object from the constructor (blueprint/template) using the "new" key word:

let myFather = new Person("John", "Doe", 50, "blue");

// Then you can access "50" using

console.log(myFather.currentAge)



console.log("EXAMPLE C")
// you can use the "instanceof" operator to find out wheter an object belongs to a particular class. This just does a boolean check. 

console.log(myFather instanceof String)  // false // note this is "String" object and not "string" primitive datatype
console.log(myFather instanceof Person)  // true
console.log(myFather instanceof Object)  // true    // since "Person", like all structs are derived from the top level "Object" data type. 


console.log("EXAMPLE D")
console.log(this.toString)
