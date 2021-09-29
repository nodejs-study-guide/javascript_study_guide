console.log("EXAMPLE A")
// Sometimes you'll want to 
let personE1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

let personE2 = {}

// The following make a clone of personE1, that means that personE2 has a different address compared to personE1.
Object.assign(personE2, personE1)

console.log(Object.is(personE1, personE2)) // false