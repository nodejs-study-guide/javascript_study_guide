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