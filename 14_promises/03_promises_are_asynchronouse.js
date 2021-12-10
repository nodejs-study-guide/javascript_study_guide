'use strict'

//let message = "hello world"

let myPromise = new Promise((resolve, reject) =>{
	let message = "hello world"
	if (typeof message !== 'undefined') {
		resolve(message)
	} else {
		errMessage = new Error("Variable is undefined")
		reject(errMessage)
	}
})

console.log(myPromise)



myPromise.then(
	msg => {
		console.log(msg)
	},
	err => {
		console.error(err)
	}
)


