console.log("EXAMPLE A")
// a simple function
function greetingsA(){
	console.log("hello world")
}

greetingsA()
greetingsA()




console.log("EXAMPLE B")
// Functions can also be stored inside a variable. This technique is referred to as "function expression"
let greetingsB = function myFunctionB(){
	console.log("hello world")
}
console.log(typeof greetingsB)    // function
greetingsB()




console.log("EXAMPLE C")
// when defining a function expression, you can also include a function-name. E.g, in this example, we have giving the function the name of
// "myFunctionC". 

let greetingsC = function myFunctionC(){
	console.log("hello world")
}
console.log(typeof greetingsC)     // function
greetingsC()

// including function-names when defining function expressions is optional, but is recommended, purely because it can help with debugging. 





console.log("EXAMPLE F")
// function can access constant+variables that are defined in outer scopes
const a = 2
let b = 3
function sumF(){
	console.log(a + b)
}

sumF()

// If you want to avoid a function from using a outside variable. Then you need to redeclare 
// the variable (using 'let') inside the function. Then that variable will be treated as a 
// seperate variable that only exists while the function is running. We're effectively doing a temporary override. 



console.log("EXAMPLE G")
// variables and constants declared inside functions, only exists inside those functions. 

function sumG(firstName, lastName){
	const a1 = 2
	let b2 = 3
	console.log(a + b)
}

sumG()
// console.log(a1)    // this gives error
// console.log(b1)    // this gives error







console.log("EXAMPLE H")
// You can define functions inside other functions.  
function greetingsH(){

	function fullName(firstName, lastName){
		return firstName + ' ' + lastName
	}

	console.log("hello " + fullName("Harry", "Potter"))
}

greetingsH()
// fullName("Tony", "Stark")     // This gives error, that's because the function only exists in the scope it's defined in. 





console.log("EXAMPLE J")
// Passing in an excess number of input parameters is allowed.  The extra arguments are simply ignored. 
function greetingsJ(firstName, lastName){
	console.log("Hello " + firstName + " " + lastName)
}

greetingsJ("Sir", "James", "Bond")    // Hello Sir James