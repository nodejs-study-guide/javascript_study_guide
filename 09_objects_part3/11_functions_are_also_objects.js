'use strict'


console.log("EXAMPLE A")


// In javascript, functions is a type of object.

function greetings(firstName, lastName) {
    let message = "Hello " + firstName + " " + lastName
    return message
}

// Finctions comse with a few defaut properties, however you can't view them because the default properties's enumerable setting is set of false. So the default properties are hidden

console.log(greetings) // [Function: greetings]


// so to view the hidden properties, you have to use:

console.log(Object.getOwnPropertyNames(greetings)) // [ 'length', 'name', 'prototype' ]

// length specifies the number of input parameters this function accepts
console.log(greetings.length) // 2

// name specifies the name of a function
console.log(greetings.name) // greetings

// prototypes will be covered later.
console.log(greetings.prototype) // {}

// for now, at first it looks like it contains an empty object. But once again it's properties are hidden
console.log(Object.getOwnPropertyNames(greetings.prototype)) // [ 'constructor' ]

