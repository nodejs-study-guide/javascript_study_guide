'use strict'


// Here we defince a new object called 'myPromise', of the type "Promise"
// this "let" line ends up also executing this entire embedded code block.

// When creating a new promise object, you need to pass in a function definition. 
// this function has to contain 2 input parameters. These input parameters
// has to be 2 callback functions (i.e. the next function to be executed). The 1st callback
// (called "myResolve" in this example) is what to execute in a success scenario,
// and the 2nd callback (called "myReject" in this example) is what to execute in a failure scenario
// This function get's executed as part of this 'let statement', and it needs to call one of resolve() or reject() function as a 
// way to signal the function has finished executing.
let myPromise = new Promise(function (myResolve, myReject) {
	
	console.log("Started executing the promise block")


	try {
		// you can comment/uncomment the following 'let' statement. 
		// to try both success+failure scenarios. 
		let message = "hello world"
		myResolve(message) // when successful
		
		// The "then" method still starts executing before this code block finishes. 
		// Hence the following line get's printed at the very end. 
		setTimeout(() => {console.log("successfully completed try block")}, 3000)
	} catch {
		err = new Error('Something went wrong')
		myReject(err)  // when error
	}
})

// you can think of a promise, as a promise to execute the provided function and provide you with 
// a result. This result being the answer to what should be run next. (myResolve or myReject)

console.log(typeof myPromise) // object

// promises have the ".then(funcDef1,funcDef2)" method. This method requires 2 function definitions as input parameter. 
// the first function definition is what to run in a success scenario. i.e. it maps to the above
// success callback above. So if "myResolve" is triggered above, then the "then" method will
// execute the first function. Similarly if the 2nd callback (myReject) is triggered, then the 
// second function is called.  


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