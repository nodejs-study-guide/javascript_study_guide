// What is a callback?
// A callback is a function passed as an argument to another function.


// Javascript is asynchronous by default.


// Here's an example of some code that will end up running synchronously. 

// function greetings(cb) {
// 	 cb()
// }
// greetings(_ => console.log(message))
// let message = "Callback Called"

// Howerver this will fail, because the "message" variable is set too late. So to 
// fix this we need either move the "message" variable declaration a few lines up. 
// or tweak the code to run asynchronously. 


function jobA(cb) {

	console.log("greetings called")
	setImmediate(() => {
		console.log("message var is now set")
		cb()
	})
}

jobA(_ => console.log(messageA));
console.log("line 1")
console.log("line 2")
let messageA = "Callback Called"
let counterA = 0
while (counterA <= 20000000) {
	messageA = "Callback Called" + counterA
	counterA++
}
console.log("line 3")

// here we used nodejs's "setImmediate()" function. 

// https://nodejs.dev/learn/understanding-setimmediate

// This causes that block to execute at the very end of everything else. So it takes the 
// final set value of "message"



function jobB(cb) {

	console.log("greetings called")
	process.nextTick(() => {
		console.log("message var is now set")
		cb()
	})
}

jobB(_ => console.log(messageB));
console.log("line 1")
console.log("line 2")
let messageB = "Callback Called"
let counterB = 0
while (counterB <= 20000000) {
	messageB = "Callback Called" + counterB
	counterB++
}
console.log("line 3")