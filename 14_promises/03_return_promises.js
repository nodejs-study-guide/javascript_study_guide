'use strict'


function doAsyncTask() {
	let myPromise = new Promise(function (resolve, reject) {

		console.log("Started executing the promise block")

		try {
			let message = "hello world"
			resolve(message) // when successful
			setTimeout(() => { console.log("Then .then method still starts before doAsyncTask function ends") }, 3000)

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
// In this example, the fs.readFile requires a callback function defintion for it's third input
// parameter. Here we used a promise to make the code look slightly neater. 
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
// The above example is a very common pattern used to help to make code readable, especially
// when the resolve and reject callback functions are quite long. It's so common in fact, that 
// nodejs provides the "promisify" function in the "util" package to help you write the above
// in an even more shorthand form:

const fs1 = require("fs")
const util = require("util")

const promisifiedReadFile = util.promisify(fs1.readFile)

promisifiedReadFile("./demo1.txt", "utf-8").then(
	data => {console.log("Successfully read file: ", data)},
	err  => {console.error("Failed to read file: ", err)}
)




console.log("EXAMPLE D")
// Their is "Promise" standard builtin object. 
Promise.resolve("Successful").then(res => {console.log("message is:", message, res)})
let message = "Hello World"

// Anitger way to write the above. 
let tmpPromise = Promise.resolve("Successful")
tmpPromise.then(res => {console.log("message is:", message1, res)})
let message1 = "Hello World"


// notice the above worked even though "message" was declared later on. 


const fs2 = require("fs")

function readFile2() {
	fs2.readFileSync("./demo1.txt", "utf-8", (err, data) => {
		
			console.log("File reading attempted")
			if (err) {
				return Promise.reject(err)
			} else {
				return Promise.resolve(data)
			}
		})
		return Promise.resolve(data)
}

let readFilePromise2 = readFile2()

readFilePromise2.then(
	data => {console.log("Successfully read file: ", data)},
	err  => {console.error("Failed to read file: ", err)}
)
