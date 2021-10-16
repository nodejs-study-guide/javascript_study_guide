console.log("EXAMPLE A")
// a simple function
function greetingsA(){
	console.log("hello world")
}

greetingsA()
greetingsA()


console.log("EXAMPLE A1")
// function can return a single value, using the "return" keyword
function greetingsA1(){
	return "hello world"
}

result = greetingsA1()
console.log(result)  // hello world

console.log(greetingsA1()) // hello world

// this also works, but it just means the return value isn't captured in a variable and just
// discarded. 
greetingsA1()



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

// If you want to avoid an function from using a outside variable. Then you need to redeclare 
// the variable (using 'let') inside the function. Then that variable will be treated as a 
// seperate variable that only exists while the function is running. We're effectively doing a temporary override. 




console.log("EXAMPLE F2")
// while function can access outer scopes variable, other constructs, e.g. if-statements can't do this
let varF2 = 5
if (true) {
	// console.log(varA)   // this will error, because variables only exists in the scope they are declared in. 
	let varF = 10
	console.log(varF2)   // 10
}

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
// You can define functions inside other functions, i.e one function nested inside another.  
function greetingsH(){

	function fullName(firstName, lastName){
		return firstName + ' ' + lastName
	}

	console.log("hello " + fullName("Harry", "Potter"))
}

greetingsH()
// fullName("Tony", "Stark")     // This gives error, that's because the function only exists in the scope it's defined in. 





console.log("EXAMPLE J")
// Passing in an excess number of input parameters is allowed.  The extra arguments are simply
// not accessible via a input-parameter handle, e.g. lastName. Although you can still access
// them via the "arguments" variable. . 
function greetingsJ(firstName, lastName){
	console.log("Hello " + firstName + " " + lastName)

	// You can also access the input parameter's values using the builtin "arguments" array. 
	console.log(arguments[0]) // Sir
	console.log(arguments[1]) // James
	console.log(arguments[2]) // Bond       // this is an extra parameter. 
	console.log(arguments[3]) // undefined  
	console.log(arguments.length) // 3
}

greetingsJ("Sir", "James", "Bond")    // Hello Sir James