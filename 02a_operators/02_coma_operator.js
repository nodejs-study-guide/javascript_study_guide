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

// Here's an example of how comma operators work:
let result = (x(), y(), z())

// in the above, all three expressions gets evaluated, but only the return value of the right most expression get's used.

console.log(result) // three
