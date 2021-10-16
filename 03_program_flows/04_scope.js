/* 
	A code block is a block of code inside curly braces. Any variables declared inside 
	curly braces are not accessible outside the curly-braces. 
	
	IMPORTANT NOTE: The only exception to this rule is functions.  

	i.e. Any variables defined inside a block scope (e.g. if-statement), only exists for the lifetime of that block's execution. 

	Note: This concept breaks down if you use the 'var' keyword instead of 'let' to declare variables. 
	Which is why it's always bad practice to use the "var" key word. 
*/



console.log("EXAMPLE A")
// inner scopes can't access outers scope's variables:

let varA = 5
console.log(varA)
if (true) {
	// console.log(varA)   // this will error, because variables only exists in the scope they are declared in. 
	let varA = 10
	console.log(varA)   // 10
}

console.log(varA) // 5   

// but in the case of functions, the can access outer scope variables:

console.log("EXAMPLE A1")
// function can access constant+variables that are defined in outer scopes
const a = 2
let b = 3
function sumA1(){
	console.log(a + b)
}

sumA1()


console.log("EXAMPLE A2")
// however variables created inside a function can't be accessed from outside it:

function sumG(firstName, lastName){
	const a1 = 2
	let b2 = 3
	console.log(a + b)
}

sumG()
// console.log(a1)    // this gives error
// console.log(b1)    // this gives error



// There are 2 types of scopes in javascript, "global scope" and "function scope". variables declared outside of any functions are global scope,
// and are accessible by any functions in that application. 
// variables declared inside functions are function scoped and can only be accessed by the code inside that function. 
// It can be easy to pollute global scope with lots of variables. That's why it's best practice to create a single (struct)
// object and store all your data inside it. 


console.log("EXAMPLE C")
// constants also honors the scope in the same way. 
const varC = 5
if (true) {
	// console.log(varC)       // this again will error, because constants only exists in the scope they were declared in. 
	const varC = 10
	console.log(varC)   // 10
}

console.log(varC) // 5