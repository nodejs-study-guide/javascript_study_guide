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


resultA = calc1() && calc2()


console.log(resultA) // false

// here calc2 function never runs. because calc1 alreade returned false. This is what's meant by short circuting. 


console.log("EXAMPLE B")
// Using "||" on the other hand doesn't cause short circuiting though. 
resultB = calc1() || calc2()


console.log(resultB) // false