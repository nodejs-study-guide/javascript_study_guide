'use strict'

// Here's a reminder of how to loop through an array, using the for-of loop:

let people = ["John", "David", "Thomas"]

for (let person of people) {
	console.log("Hello", person)
}

// As mentioned before, the Try-catch block can't be used when running non-blocking asynchronous code. 
// But it does work well when used with async+await, since async+await adds in blocking code. 


let resolvedPromise1 = new Promise((resolve, reject) => {
	console.log("running promise's executor function")
	setTimeout(_ => resolve("hello1"), 3 * 1000)
})


let resolvedPromise2 = new Promise((resolve, reject) => {
	console.log("running promise's executor function")
	setTimeout(_ => resolve("hello2"), 10 * 1000)
})

let resolvedPromise3 = new Promise((resolve, reject) => {
	console.log("running promise's executor function")
	setTimeout(_ => resolve("hello3"), 3 * 1000)
})

let promises = [resolvedPromise1, resolvedPromise2, resolvedPromise3]


// Here's a special for-await-of loop syntax you can use. 
async function doSomeWork(listOfPromises) {
	for await (let promise of listOfPromises) {
		console.log(promise)
	}
}


// this is actually just another way of writing:


// async function doSomeWork(listOfPromises) {
// 	for (let promise of listOfPromises) {
// 		let returnValueFromPromise = await promise
// 		console.log(returnValueFromPromise)
// 	}
// }



doSomeWork(promises)


