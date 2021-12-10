'use strict'

let completed = true 



let myPromise = new Promise((resolve, reject) => {

	// some async work here. 
	if (completed) {
		resolve("code executed successfully")
	} else {
		reject("Something has gone wrong")
	}

})

// instead of passing a simple string value from one then block to the next, you can pass

// If long running tasks are executed inside a 'return' statement, then the next '.then' statment ends up waiting. 
// So an easy way to run one line after another line, is to create a .then.then.then...etc chain where each .then chain returns a promise. 
myPromise
.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
		return new Promise(resolve => {
			setTimeout(_ => { resolve("successfully done2") } , 5000)     // the next ".then" wont run until this return statement ends. 
		})
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
		return "failed doing done2"
	}
)
.then(
	value => {
		console.log("second then executes with the input value of:" , value)
		return "the final output"
	}
)
.then(
	value => {
		console.log(value)          // you don't have to have a return value in order to chain yet another 'then'
	}
)
.then(
	_ => {
		console.log("Nothing else left to run")
	}
)



// Also when a .then block returns a promise, then the next .then block in the chain can include both resolve and reject function definitions.

// The above approach is a good way to avoid callback hell, it avoids lots and lots of nesting. 