'use strict'

// As mentioned before, the Try-catch block can't be used when running non-blocking asynchronous code. 
// But it does work well when used with async+await, since async+await adds in blocking code. 


let resolvedPromise = new Promise((resolve, reject) =>{
	console.log("running promise's executor function")
	setTimeout(_ => resolve("hello"), 2 * 1000)
})

let rejectedPromise = new Promise((resolve, reject) =>{
	console.log("running promise's executor function")
	setTimeout(_ => reject("Something went wrong"), 5 * 1000)
})


async function doSomeWork(myPromise) {

	try {
		let valueReturnedFromPromise = await myPromise
		console.log(valueReturnedFromPromise)
		console.log("'try' block completed successfully")
	} catch (errorX) {
		console.error("ERROR:", errorX)
	}
	finally {
		console.log("This always run, irrespective of whether an error was encountered.")
	}

}


doSomeWork(resolvedPromise)


doSomeWork(rejectedPromise)