'use strict'

// short circuiting is a concept that occurs in some scenarios where the "&&" is used.


console.log("EXAMPLE A")

function calc1(){
	console.log("running calc1")
	return false
}
function calc2(){
	console.log("running calc2")
	return true
}


let resultA = calc1() && calc2()


console.log(resultA) // false

// here calc2 function never runs. because calc1 already returned false. This is what's meant by short circuting.

// also the last executed function return value is what gets captured into to the variable.

// This time both runs.
let resultA2 = calc2() && calc1()
console.log(resultA2) // true

// if you want to gaurantee all functions are executed then you can use the "comma operators" approach that was disucssed earlier
// or use the "or" operator which is express as a double pipe "||"


console.log("EXAMPLE B")
// Using "||" on the other hand doesn't cause short circuiting though. 
let resultB = calc1() || calc2()
console.log(resultB) // true


