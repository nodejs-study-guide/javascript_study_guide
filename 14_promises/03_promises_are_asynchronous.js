'use strict'



let myPromise = new Promise((resolve, reject) =>{
	console.log("hello1")
	resolve("hello2")
})

// the ".then" here means it doesn't run straight away. Instead, it's put on the event loop
// so that it runs on the second iteration. 
myPromise.then(
	val => {console.log(val)}
)


console.log("goodbye")


// as a result the order of the output looks like:

// hello1
// goodbye
// hello2
