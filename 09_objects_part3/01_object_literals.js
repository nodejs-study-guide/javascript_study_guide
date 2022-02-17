"use strict"

/*
There are 3 ways to create javascript objects:

1. Object Literals
2. Constructor functions
3. Classes

*/


console.log("EXAMPLE A")
// The object literal approach to creating objects is simply:


let person1 = {
	firstName: 'John',
	lastName: 'Smith',
	eyeColor: 'brown',
	greetings: function () { return 'hello ' + this.firstName + ' ' + this.lastName }
}


console.log(person1)

// Object literals are dynamic, i.e you can add a new entry:

person1.age = 23
person1.isAdult = function() {
	return this.age >= 18
}

console.log(person1)
console.log(person1.isAdult())


// dynamically adding extra entries after a object is created, while powerful, but can be considered bad-practice/dangerous.



console.log("EXAMPLE B")

// Let's say we have the following code:

function createUserB1(firstName, lastName){

	let person = {
		firstName: firstName,
		lastName: lastName,
		greetings: function () { return 'hello ' + this.firstName + ' ' + this.lastName }
	}
	console.log(person)
	return person
}
let ironMan = createUserB1("Tony", "Stark")
console.log(ironMan.greetings())



// Since the above input parameters are used to directly create an object with corresponding identical key-names.
// It means we can write the above in the following shorthand form:

function createUserB2(firstName, lastName){

	let person = {
		firstName,       // notice the short-hand on this line
		lastName,        // notice the short-hand on this line
		greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
	}
	console.log(person)
	return person

}
spiderMan = createUserB2("Peter", "Parker")

// Also noticed greeting function is written in a slightly more short-hand form too:


console.log(spiderMan.greetings())



console.log("EXAMPLE C")
// Javascript provides a builtin variable called "Object", which is of the type object. This has some handy methods you can use.

let personC1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

// Here we just print out the personC1's object's keys:
console.log(Object.keys(personC1))   // [ 'firstName', 'lastName', 'greetings' ]



console.log("EXAMPLE D")


let personD1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

let personD2 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

// The above to object have identical content, however the following shows false:

console.log(Object.is(personD1, personD2))  // false


// That's becuase behind the scenes the object are actually pointers to a memory addresses. And in this scenario,
// the memory addresses are different. So to make this "true", we can simply do:

personD1 = personD2        // this makes both variables point to the same memory location.
console.log(Object.is(personD1, personD2)) // true

// note this pointer related behaviour only applies when comparing objects.
// If comparing primitive data, it just does a value based comparison instead, e.g:

console.log(Object.is(personD1.firstName, personD2.firstName))  // true


console.log("EXAMPLE E")
// Notice that when 2 objects points to the same memory address, editing one object ends up editing the other object:
personD1.firstName = "Fiona"
console.log(personD1.firstName) // Fiona
console.log(personD2.firstName) // Fiona





