/*
Let's say we have two objects, person1 and person2.
One of person1's property is a function (aka method), however person2 doesn't have
this property+function (aka method).

However you can still apply this person1's method to person2 using the "bind()" builtin function
*/

let person1 = {
  name: 'Mary',
  getName: function(age){
    return this.name + ' is ' + age
  },
}

let person2 = {
  name: 'John',
}

// The "bind" method creates a copy of the "getName" function and stores it as a function express, called "result.
// Also this new function's internal "this" object is storing the content of person2 object.
result =  person1.getName.bind(person2)

// notice this is a function. This function has 'this' pre-saved to
// the person2 object in this new function.
console.log(result) // [Function: bound getName]

console.log(result.toString()) // function () { [native code] }

console.log(   result()   ); // John is undefined
console.log(   result(23)   ); // John is 23
