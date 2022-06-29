'use strict'

// node constructor_functions.js

console.log("EXAMPLE A")

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







console.log("EXAMPLE B")
// This is very repetitive, and hard to maintain if you have 100s of objects. Hence, a better
// approach is to you use a constructor, e.g:

// notice there's no return statement
function Person (firstName, lastName, age, eyeColor){
  this.firstName= firstName
  this.lastName= lastName
  this.age= age
  this.eyeColor= eyeColor
  this.greetings= function(salute){return salute + ' ' + this.firstName + ' ' + this.lastName}
}

// This type of function is referred to as an "object constructor function".
// ref - https://www.w3schools.com/js/js_object_constructors.asp

// The "new" keyword captures the object stored inside "this".
let person4 = new Person('John','Smith',23,'brown')

console.log(person4.eyeColor) // brown


console.log(person4) // this outputs (notice it outputs the object type, "Person", thanks to the use of the "new" key word above):
// Person {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 23,
//   eyeColor: 'brown',
//   greetings: [Function (anonymous)]
// }

let message = person4.greetings('hi')
console.log(message)  // hi John Smith






console.log("EXAMPLE C")
// you can use the "instanceof" operator to find out whetever an object belongs to a particular class. This just does a boolean check.

console.log(person4 instanceof String)  // false // note this is "String" object and not "string" primitive datatype
console.log(typeof person4) // object  // notice "typeof" just says the generic "object" rather then "Person". That's why "instanceof" is slightly better here
console.log(person4 instanceof Person)  // true
console.log(person4 instanceof Object)  // true    // since "Person", like all structs are derived from the top level "Object" data type.


console.log("EXAMPLE D")
console.log(this.toString)
