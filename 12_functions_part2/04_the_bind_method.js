'use strict'
/*

In docker, you can take an existing image, and bake in a file, so that you end up with a new image.

Similarly, in javascript, you can take a function (usually a method), insert a
variable (called "this=object1"), and output the modified function with the (this variable hard coded in).
*/

// Let's say we have two objects, person1:

let person1 = {
  name: 'Mary',
  getName: function(age){
    return this.name + ' is ' + age
  },
}

// ...and person2:


let person2 = {
  name: 'John',
}


// person1 has the 'getName' which person2 doesn't have.

// However you can still apply this person1's method to person2 using the "bind()" builtin function



// The "bind" method creates a copy of the "getName" function and stores it as a function-expression, called "result".
// Also this new function's internal "this" object is storing the content of person2 object.
result =  person1.getName.bind(person2)

// notice this is a function. This function has 'this' pre-saved to
// the person2 object in this new function.
console.log(result) // [Function: bound getName]

console.log(result.toString()) // function () { [native code] }

console.log(   result()   ); // John is undefined
console.log(   result(23)   ); // John is 23
