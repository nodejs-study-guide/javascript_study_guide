'use strict'

// async/await is something that's used in conjunction with Promises, and it's an alternative 
// to using the ".then"

let myPromise2 = new Promise((resolve, reject) =>{
	console.log("helloB1")
	setTimeout(_ => resolve("helloB2"), 10 * 1000)
})

// The "async" word is put in front of a function defition
async function runThisStraightAway(){
	console.log("helloB3")
	// The "await" is inserted in front of the promise variable, the reject/resolve value is captured
	// into a variable using the "=" statement. 
	// 
	let resolvedValue = await myPromise2    // This line is blocking. The rest of this function pauses until this completes. 
	console.log(resolvedValue)
	console.log("helloB4")
} 

runThisStraightAway()

console.log("goodbyeB2")
