console.log("Example A")


// here's a constructor function
function PersonA(forename, surname){
	this.firstName = forename
	this.lastName = surname
}

console.log(typeof PersonA)
console.log(PersonA)

// Also when you create new object using the constructor function,
let PersonA1 = new PersonA("Bruce", "Wayne")


console.log(PersonA1)
console.log(PersonA1.__proto__)
console.log(PersonA1.__proto__.__proto__)
console.log(PersonA1.__proto__.__proto__.__proto__)
