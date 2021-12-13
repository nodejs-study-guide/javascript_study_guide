'use strict'


// Your code can end up be run synchronously or async, depending on what the code is, e.g. the following code is synchronous:


// callback function
function cb1() {
	console.log("hello 2")
}

console.log("hello 1")
cb1()
console.log("hello 3")




// Whereas the following runs asynchronosly
function cb() {
	console.log("hello 2")
}

console.log("hello 1")
setTimeout(cb, 3000)
console.log("hello 3")