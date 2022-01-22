'use strict'

// async/await is something that's used in conjunction with Promises, and it's an alternative 
// to using the ".then", i.e. it's an alternative way to consome promises. 

let myPromise2 = new Promise((resolve, reject) =>{
	console.log("helloB1")
	setTimeout(_ => resolve("helloB2"), 3 * 1000)
})

// The "async" word is put in front of a function defition
async function runThisStraightAway(){
	console.log("helloB3")
	// The "await" is inserted in front of the promise variable, the reject/resolve value is captured
	// into a variable using the "=" statement. 
	// 
	let resolvedValue = await myPromise2    // This line is blocking. The rest of this function pauses until this completes. 
											// it sets resolvedValue to the argument passed into the  resolve() function above
	console.log(resolvedValue)
	console.log("helloB4")
} 

runThisStraightAway()

console.log("goodbyeB2")
