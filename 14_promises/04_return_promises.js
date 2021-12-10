'use strict'


function doAsyncTask() {
	let myPromise = new Promise(function (resolve, reject) {

		console.log("Started executing the promise block")

		try {
			let message = "hello world"
			resolve(message) // when successful

		} catch {
			err = new Error('Something went wrong')
			reject(err)  // when error
		}
	})
	return myPromise
}

let returnedPromise = doAsyncTask()

returnedPromise.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
	}
)


// if a promise's function, ends up calling both resolve() and reject(), then only the one
// that get's called first takes precedence. 





console.log("EXAMPLE B")
// In this example, notice how the the resolve/reject callbacks are triggered from inside another (fs.readfile) callback.


const fs = require("fs")

function readFile1() {
	return new Promise((resolve, reject) => {
		fs.readFile("./demo1.txt", "utf-8", (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	}
	)
}

let readFilePromise1 = readFile1()

readFilePromise1.then(
	data => {console.log("Successfully read file: ", data)},
	err  => {console.error("Failed to read file: ", err)}
)





console.log("EXAMPLE C")
// The above example is a very common pattern where another method's callback (fs.readFile) decides 
// which of the promise's callback (resolve or reject) to trigger. 
// This is quite a common pattern, so common in fact, that you can use `util.promisify` core function to write this
// in a more shorthand form.  
// Note, this only works in cases where the callback's first input parameter is for passing in the error value. 
const fs1 = require("fs")
const util = require("util")

const promisifiedReadFile = util.promisify(fs1.readFile)

promisifiedReadFile("./demo1.txt", "utf-8").then(
	data => {console.log("Successfully read file: ", data)},
	err  => {console.error("Failed to read file: ", err)}
)