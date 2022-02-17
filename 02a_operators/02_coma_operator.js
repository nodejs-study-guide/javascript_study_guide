'use strict'

function x() {
	return 'one'
}

function y() {
	return 'two'
}

function z() {
	return 'three'
}

let result = (x(), y(), z())

// in the above, all three expressions gets evaluated, but only the return value of the right most expression get's used.
console.log(result)


// also the following
let a=1, b=2, c=3
console.log(a)
console.log(b)
console.log(c)