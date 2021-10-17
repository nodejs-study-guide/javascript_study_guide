console.log("EXAMPLE A")
// a simple function
function greetingsA(){
	console.log("hello world")
}

// Functions makes it easy to rerun the same block of code multiple times. 
greetingsA()
greetingsA()


console.log("EXAMPLE A1")
// function can return a single value, using the "return" keyword
function greetingsA1(){
	return "hello world"
}

// here we capture the return value into a new variable called "result"
let result = greetingsA1()
console.log(result)  // hello world

console.log(greetingsA1()) // hello world

// this also works, but it just means the return value isn't captured in a variable and is just
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
// when defining a function expression, you can also omit the function-name: 

let greetingsC = function() {
	console.log("hello world")
}
console.log(typeof greetingsC)     // function
greetingsC() // hello world


// A function without a name is called "anonymous functions". 










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
	console.log(arguments)   // [Arguments] { '0': 'Sir', '1': 'James', '2': 'Bond' }
}

greetingsJ("Sir", "James", "Bond")    // Hello Sir James