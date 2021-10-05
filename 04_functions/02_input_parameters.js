console.log("EXAMPLE A")
// function with input parameters 

function greetingsA(firstName, lastName){
	console.log("Hello " + firstName + " " + lastName)
}

greetingsA("James", "Bond")    // Hello James Bond


// Passing in an insufficient number of input parameters is allowed. 
greetingsA("James")            // Hello James undefined       // notice script doesn't fails. just prints undefined. 


// passing excessive is also allowed, the additional arguments are simply ignored. 

greetingsA("Tony", "Stark", "Ironman")    // Hello Tony Stark


console.log("EXAMPLE B")
// You can assign default values to input parameters like this:

function greetingsB(firstName = "Peter", lastName = "Parker"){
	console.log("Hello " + firstName + " " + lastName)
}

greetingsB("Daniel" , "Craig")    // Hello Daniel Craig
greetingsB()                      // Hello Peter Parker
greetingsB("Tom")		  // Hello Tom Parker






console.log("EXAMPLE E")
// function with a return value 
// You simply use the "return" keyword to return the values you want. You don't need to specify any output parameter definitions like we do in golang.
function greetingsE(firstName, lastName){
	let message = "Hello " + firstName + " " + lastName
	return message
}

let answerE = greetingsE("Homer", "Simpson")
console.log(answerE) 


// NOTE: functions can't return multiple return value, it can only return a single value. 



