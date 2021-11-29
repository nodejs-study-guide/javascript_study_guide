'use strict'


console.log("EXAMPLE A")

// Let's say we want to force the following four lines in this order (and we're not allowed to change the ordering):
setTimeout(_ => { console.log("welcome") }, 3000)
setTimeout(_ => { console.log("to") }, 1000)
setTimeout(_ => { console.log("the") }, 300)
setTimeout(_ => { console.log("jungle") }, 200)

// At the moment the above outputs the wrong order:

// jungle
// the
// to
// welcome

console.log("EXAMPLE B")
// We can force the ordering using callbacks:

function start() {
	console.log("Welcome")
	setTimeout(next1, 5000)
}

function next1() {
	console.log("to")
	setTimeout(next2, 200)
}

function next2() {
	console.log("the")
	setTimeout(next3, 2000)
}


function next3() {
	console.log("jungle")
}

setTimeout(start, 3000)

