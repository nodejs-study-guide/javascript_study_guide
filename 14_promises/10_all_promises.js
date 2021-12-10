'use strict'

let completed = true

let myPromise1 = new Promise((resolve, reject) => {
	// some async work here. 
	if (completed) {
		setTimeout(_ => { resolve("successfully done1") }, 10000)
	} else {
		reject("Something has gone wrong1")
	}
})


let myPromise2 = new Promise((resolve, reject) => {
	// some async work here. 
	if (completed) {
		setTimeout(_ => { resolve("successfully done2") }, 5000)
	} else {
		reject("Something has gone wrong2")
	}
})

let myPromise3 = new Promise((resolve, reject) => {
	// some async work here. 
	if (completed) {
		setTimeout(_ => { resolve("successfully done3") }, 10000)
	} else {
		reject("Something has gone wrong2")
	}
})

// completed = false
// let myPromise4 = new Promise((resolve, reject) => {
// 	// some async work here. 
// 	if (completed) {
// 		setTimeout(_ => { resolve("successfully done4") }, 1000)
// 	} else {
// 		setTimeout(_ => { reject("Something has gone wrong4") }, 1000)
// 	}
// })


let promises = [myPromise1, myPromise2, myPromise3]
//promises.push(myPromise4) // append to an array

// All of the above promises will run in parrallel. 
// so the following will run only after the list of promisese have reached the resolved/rejected state.  
Promise.all(promises).then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)       // this will output after about 10 seconds. 
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
	}
)
// .catch()      // the following catch feature is also available. 

// Promise.All() will get triggered if one of the promises fails, in which case it will just execute the reject function, using the reject value provided
// by the first failed promise. 