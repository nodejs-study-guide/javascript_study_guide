/* 

There are different types of errors:

- ReferenceError
- RangeError
- TypeError
- URIError
- SyntaxError

*/



console.log("EXAMPLE A")
// Here's an example of a ReferenceError:

try {
	console.log(result) // this line will fail because the "result" variable was never declared.

} catch (error) {
	console.log(error.message) // result is not defined
	console.log(error.name)    // ReferenceError   
}



console.log("EXAMPLE B")
// Here's an example of a RangeError, some kind of error relating to numeric values. 

try {
	resultB = 0
	resultB.toPrecision(200) 

} catch (error) {
	console.log(error.message) // toPrecision() argument must be between 1 and 100
	console.log(error.name)    // RangeError   
}



console.log("EXAMPLE C")
// Here's an example of a TypeError

try {
	resultC = 0
	resultC.toUpperCase()

} catch (error) {
	console.log(error.message) // resultC.toUpperCase is not a function
	console.log(error.name)    // TypeError   
}



console.log("EXAMPLE D")
// Here's an example of a TypeError

try {
	let uriD = "http://google.com//path%%%/fille name"
	decodeURI(uriD)
	console.log("success")

} catch (error) {
	console.log(error.message) // URI malformed
	console.log(error.name)    // URIError   
}




console.log("EXAMPLE E")
// Here's an example of a TypeError

try {
	resultE = eval("alert('forgot to add single quote at the end of this string)")
} catch (error) {
	console.log(error.message) // Invalid or unexpected token
	console.log(error.name)    // SyntaxError   
}