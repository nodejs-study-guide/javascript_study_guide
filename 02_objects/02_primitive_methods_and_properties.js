'use strict'

console.log("EXAMPLE A")
// In javascript everything is an object. For example this variable is an object of the (primitive) type "string":
let message = "hello";
console.log(message)  // hello
console.log(typeof message) // string



console.log("EXAMPLE B")
// A function is also an object. For example, this "Greetings" function is an object of the (primitive) type, "function"   
function Greetings(name) {
	return "Hello " + name    
}
console.log(Greetings("Jack"))  // Hello Jack
console.log(typeof Greetings)   // function



console.log("EXAMPLE C")
// Objects that belongs to a primitive type, will have it's own set of builtin "methods" and "properties". VScode's intellisense will list them out for you. 
// For example string based variables comes with the "toUpperCase()" method and the "length" property


console.log(message.toUpperCase()) // HELLO
console.log(message.length) // 5
// For more info about these builtin string methods and properties, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

