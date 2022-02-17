'use strict'



// in the above, all three expressions gets evaluated, but only the return value of the right most expression get's used.
// console.log(typeof Object.prototype)

console.log(Object.getOwnPropertyNames(Object.prototype))


let person = {
	firstName: "David",
	age: 25
}

console.log(person)
console.log(person.hasOwnProperty())

