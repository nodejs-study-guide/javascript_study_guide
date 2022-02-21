'use strict'

function greetings(){
	console.log("hello")
}

console.log(greetings) // [Function: greetings]

// to view the content of this function
console.log(greetings.toString())
// this outputs:

// function greetings(){
// 	console.log("hello")
// }

// here are the function's non-enumerable properties:
console.log(Object.getOwnPropertyNames(greetings)) // [ 'length', 'name', 'prototype' ]


console.log(greetings.length) // 0
console.log(greetings.name) // greetings
console.log(greetings.prototype) // {}     // this setting only becomes important if function in question is a constructor function


