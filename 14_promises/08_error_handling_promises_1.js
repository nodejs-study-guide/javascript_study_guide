'use strict'



let completed = false



let myPromise = new Promise((resolve, reject) => {

	// some async work here. 
	if (completed) {
		resolve("code executed successfully")
	} else {
		reject("Something has gone wrong")
	}

})


// The error-handler (reject function) can be anywhere down the .then chain, and get's triggered as soon as it's reached
myPromise
.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
		return "successfully done2"
	}
)
.then( // this get's skipped in an error scenario
	value => {
		console.log("second then executes with the input value of:" , value)
		return "the final output"
	}
)
.then( // this get's skipped in an error scenario
	value => {
		console.log(value)
	}
)
.then(
	_ => {
		console.log("Nothing else left to run")
	},
	function (myError) {
		console.log("Executing the reject function")    // this get's executed
		console.error(myError)
	}
)


