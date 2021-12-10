'use strict'



let completed = true



let myPromise = new Promise((resolve, reject) => {

	// some async work here. 
	if (completed) {
		resolve(5)
	} else {
		reject(10)
	}

})


myPromise.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		successResponse = successResponse + 1
		console.log("the message is:", successResponse)
		return "successfully done2"
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
		return "failed doing done2"
	}
)


myPromise.then(
	function (successResponse) {
		console.log("Executing a forked resolve")
		successResponse = successResponse + 100
		console.log("the message is:", successResponse)
	},
	function (myError) {
		console.log("Executing the forked reject function")
		console.error(myError)
	}
)

// This approach essentially lets you run multiple different resolve/reject functions against a particular promise. The original input value that 
// the promise provides to resolve/reject, doesn't change.  