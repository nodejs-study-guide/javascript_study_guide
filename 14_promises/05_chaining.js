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


// if the reject/resolve functions ends with a return statement. The the return value can be passed to futher 'then' methods. 
myPromise
.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
		return "successfully done2"
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