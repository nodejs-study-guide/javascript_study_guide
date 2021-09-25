console.log("EXAMPLE A")

// function can access/update variables that are defined in outer scopes
let a = 3
function updateA() {
	a++
}

console.log(a) // 3
updateA()
console.log(a) // 4


// But, watch out for the following scenario




console.log("EXAMPLE B")
// if a function's input parameter's name happens to be the same value of higher scope's variable,
// then the function loses access to the higher-scoped variable. 
let b = 10
function updateB(b) {
	b++
	console.log(b) // 11

}

console.log(b) // 10
updateB(b)
console.log(b) // 10





// This behaviour only occurs with primitive data types. 
// This behaviour doesn't apply for composite objects:

console.log("EXAMPLE C")
let personC = {
	firstName: 'John',
	lastName: 'Smith',
	age: 23,
}

function incrementAge(personC){
	personC.age++
}

console.log(personC.age) // 23
incrementAge(personC)
console.log(personC.age) // 24

// This is caused by the passing-by-reference phenomena, a bit like passing pointers into a Go function.  




console.log("EXAMPLE D")
// same as previous example, but input parameter now set to something different, "p". This makes no difference, it still behaves the same
// way. 
let personC = {
	firstName: 'John',
	lastName: 'Smith',
	age: 23,
}

function incrementAge(p){
	p.age++
}

console.log(personD.age) // 23
incrementAge(personD)
console.log(personD.age) // 24
