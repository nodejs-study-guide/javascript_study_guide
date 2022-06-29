console.log("EXAMPLE A")
let personA1 = {
	firstName: "Bruce",
	lastName: "Banner",
	age: 40,
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}


function increaseAgeA(person){
	person.age = person.age +1
	return person
}

// here we're actually passing in the memory pointer of personA1.
personA2 = increaseAgeA(personA1)


console.log(personA1)
console.log(personA2)

// Here'e you'll see that personA1.age has also gone up, even though it was passed in as parameter. 
// This scenario is called "object mutation".  The same kind of thing happens in Go, when an input parameter 
// is a pointer to an object. 

console.log(Object.is(personA1, personA2)) // true - i.e. both objects points to the same memory location. 



console.log("EXAMPLE B")
// If you want a function to accept an object, but prevent object mutation, then do something like this
let personB1 = {
	firstName: "Peter",
	lastName: "Parker",
	age: 40,
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}


function increaseAgeB(person){
	newPerson = {}                      // created new variable to avoid mutation this time
	Object.assign(newPerson, person)    // pupulating key-values of new object by making copies of key-values from input parameter
	newPerson.age = newPerson.age +1
	return newPerson
}

personB2 = increaseAgeB(personB1)


console.log(personB1)
console.log(personB2) // only this personB2.age has incremented. Therefore there was no mutation. 
console.log(Object.is(personB1, personB2)) // false

