'use strict'

/* 
	Scope controls the accessibility of variables. There are 2 types of scopes:

	- Block scope - variables defined inside curly braces using either the "let" or "const" key words
	- Global scope - variables defined outside any curly braces. 

*/

console.log("EXAMPLE A")
// Variables defined inside a curly brace, can't be accessed outside it. 
{
	let a = 5
	console.log(a) // 5
}
// console.log(a) // Gives "ReferenceError: a is not defined" error


console.log("EXAMPLE B")
// Inner scope can access outer scope variables:

let b = 2    // this isn't inside any {...} hence it's a global variable. 
{
	console.log(b) // 2
}

console.log("EXAMPLE C")
// Inner scope can update outer scope variables:

let c = 3
{
	c = 3.141
	console.log(c) // 3.141
}
console.log(c) // 3.141


console.log("EXAMPLE D")
// Inner scope can override outer-scope variable, but keep the outer scope variable preserved. 
// That is, we're simply reusing variables names within the blocks. 
let d = 4
{
	let d = 40
	console.log(d) // 40
}
console.log(d) // 4


console.log("EXAMPLE E")
const e = 5
{
	e = 50			// this gives "TypeError: Assignment to constant variable." error
					// however you can do 'let e = 50' or 'const e = 50' to do override in this scope only
	console.log(e)  // 5
}
console.log(e) // 5


// All the above concepts applies to if-statements, loops,..etc
// It also applies to functions, as long as you use the "let" and "const" key words for 
// creating the variables. 

// It can be easy to pollute global scope with lots of variables. That's why it's best practice to create a single (struct)
// object and store all your data inside it. 

