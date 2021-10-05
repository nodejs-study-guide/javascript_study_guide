console.log("EXAMPLE A")
let personA1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

// here we're creating an empty object
let NewPersonA2 = {}

// The following make a clone of personA1, that means that NewpersonA2 has a different memory address compared to personA1.
Object.assign(NewPersonA2, personA1)


console.log(personA1)
console.log(NewPersonA2)

// The following is false, meaning that the two objects are pointing to 
// different memory locations.  I.e. one is a duplicate of the other. 
// This means you can also edit one object and it, without effecting the other. 
console.log(Object.is(NewPersonA2, personA1)) // false


console.log("EXAMPLE B")
// In the above example we started by setting NewPersonA2 as an empty object. But it could have been non empty. 
// e.g. 
let personB1 = {
	firstName: "Tom",
	lastName: "Hanks",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}


// here we're creating an object with some info:
let NewPersonB2 = {
	age: 70
}

// Assign on this occasion ends up merging personB1 properties into NewPersonB2
Object.assign(NewPersonB2, personB1)


console.log(NewPersonB2)







