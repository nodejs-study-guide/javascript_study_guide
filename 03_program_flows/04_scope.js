/* 
	A code block is a block of code inside curly braces. Any variables declared inside 
	curly braces (using the 'let' key word) are not accessible outside the curly-braces.

	This concept breaks down if you use the 'var' keyword instead of 'let' to declare. 
	Which is why it's always bad practice to use the "var" key word. 
*/



console.log("EXAMPLE A")
let varA = 5
if (true) {
	// console.log(varA)   // this will error, because variables only exists in the scope they are declared in. 
	let varA = 10
	console.log(varA)   // 10
}

console.log(varA) // 5





console.log("EXAMPLE C")
// constants also honors the scope in the same way. 
const varC = 5
if (true) {
	// console.log(varC)       // this again will error, because constants only exists in the scope they were declared in. 
	const varC = 10
	console.log(varC)   // 10
}

console.log(varC) // 5