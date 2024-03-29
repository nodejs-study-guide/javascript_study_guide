console.log("EXAMPLE A")

try {
	console.log(nonExistantVariable) // this line will fail becuase the "nonExistantVariable" variable was never declared. 
	console.log("this line never get's reached")
} catch (errorX) {
	console.log("encountered an error")
	console.log(errorX.message) // result is not defined
	console.log(typeof errorX) // object
	console.log(errorX.name)   // ReferenceError    // this shows the type of error message this is. 
}
finally {
	console.log("This always run, irrespective of whether an error was encountered.")
}









console.log("EXAMPLE B")
// The "Throw" is something you can use inside a catch block to provide some extra info about the error message.  

try {
	console.log(nonExistantVariable)
} catch (error) {
	console.log("encountered an error")
	throw{
		"message": "Something went wrong with....blah blah blah. Here is the error message: " + error.message,
		"name": "myCustomError ID: 3243243"	
	}
}
finally {
	console.log("This always run, irrespective of whether an error was encountered.")
}





console.log("EXAMPLE C")
// You should ONLY use try-catch system when running synchronous code. It doesn't work with asynchronouse code. 
// IN the following example, the "catch" never runs:

try {
	setTimeout(_ => {console.log(nonExistantVariable)},  2000)
	console.log("This runs, when in fact you don't want it to")
} catch (error) {
	console.log("encountered an error")
}
finally {
	console.log("This always run, irrespective of whether an error was encountered.")
}