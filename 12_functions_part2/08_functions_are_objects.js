'use strict'

// In javascript, a function is actually a type of object.


function greetings(){
	console.log("hello")
}

console.log(greetings) // [Function: greetings]

// to view the content of this object.
console.log(greetings.toString())
// this outputs:

// function greetings(){
// 	console.log("hello")
// }


