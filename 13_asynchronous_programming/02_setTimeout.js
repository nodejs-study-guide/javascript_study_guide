'use strict'


// callback function
function cb() {
	console.log("hello 2")
}

console.log("hello 1")
setTimeout(cb, 3000)
console.log("hello 3")