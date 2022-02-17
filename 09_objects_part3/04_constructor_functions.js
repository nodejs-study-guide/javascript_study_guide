/*
There are three ways to create javascript objects:

1. Object Literals
2. Constructor functions
3. Classes

But so far we have only looked at creating objects using the "Object Literals" approach.

*/


console.log("EXAMPLE A")
// here's a reminder of creating an object using the object literal approach :


let personA = {
	firstName: 'John',
	lastName: 'Smith',
	eyeColor: 'brown',
	greetings: function () { return 'hello ' + this.firstName + ' ' + this.lastName }
}


console.log(personA)

// Object literals are dynamic, i.e you can add a new entry:

personA.age = 23
personA.isAdult = function() {
	return this.age >= 18
}

delete personA.eyeColor       // notice we deleted a property.


// Notice that object created using the object literal approach, are dynamic, i.e. you can
// add/remove properties from an object, after it's been created.
console.log(personA)

// Also creating multiple objects using this approach can use up a lot of lines.


console.log("EXAMPLE B")
// constructor functions let's you create objects, but with fewer lines of code.
// These objects are still dynamic though.


// to do this, we first write a "constructor function":

function Person(foreName, surName, age) {
	this.firstName = foreName
	this.lastName = surName
	this.age = age
	this.greetings = function () { return 'hello ' + this.firstName + ' ' + this.lastName }
	this.isAdult = function() {
		return this.age >= 18
	}
}


// The key indicator that the above function is a constructur function, is the use of the "this." key word. Also, constructor
// functions don't use the "return" key word.

// To call this constructor function, we use the "new" key word:

let superman = new Person("Clark", "Kent", 40)

console.log(superman)

console.log(superman.greetings())


// you can also dynamically add/delete properties to an existing object.
superman.eyeColor = "blue"

console.log(superman)