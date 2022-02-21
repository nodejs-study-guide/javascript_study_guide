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

console.log(Object.getOwnPropertyNames(greetings)) // [ 'length', 'name', 'prototype' ]


console.log(greetings.length)
console.log(greetings.name)
console.log(greetings.prototype)