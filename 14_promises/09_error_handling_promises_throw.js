'use strict'

let completed = false

// When using "throw", can remove the part ", reject" from the line below.                                 
let myPromise = new Promise((resolve, reject) => {

	// some async work here. 
	if (completed) {
		resolve("code executed successfully")
	} else {
		throw "Something has gone wrong"      // If you want, you can just use "throw" instead of "reject(...)". 
	}

})

// the "then" method is used to define the "resolve"  and "reject" functions, and then executes it. 
myPromise.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
	}
)


// You can also use "throw" inside a ".then" block, when you do that, then the next .then statement' reject function will get triggered. 


completed = true

let myPromise1 = new Promise((resolve, reject) => {

	// some async work here. 
	if (completed) {
		resolve("code executed successfully")
	} else {
		reject("Something has gone wrong")     
	}

})

myPromise1
	.then(
		function (successResponse) {
			console.log("Executing the resolve function")
			console.log("the message is:", successResponse)
		},
		function (myError) {
			console.log("Executing the reject function")
			console.error(myError)
			return "failed doing done2"
		}
	)
	// .then(
	// 	value => {
	// 		throw "then statement failed here"
	// 	}
	// )
	.then(
		value => {
			console.log(value)
		},
		err => {
			console.error("Encountered an error:", err)     // This gets executed, if there is no .catch block at the bottom.  
		}
	)
	.then(
		_ => {
			console.log("This still ends up running, if there is no catch statement at the bottom")
		}
	)
	.catch(                                     // This get's executed straight after a throw is found, otherwise it carries on going down the .then chain
		_ => {
			console.error("Catch get's executed")
		}
	)
	.finally(                                     // This code block ALWAYS runs, in all cases 
		_ => {
			console.error("Do cleanup")
		}
	)	
