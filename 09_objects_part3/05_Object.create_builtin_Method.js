/*
There are 3 ways to create javascript objects:

1. Object Literals           // this uses Object.create() method behind the scenes
2. Constructor functions     // this uses Object.create() method behind the scenes
3. Classes

So far we have only looked at creating objects using the "Object Literals" and the "Constructor functions" approach.
We'll cover the 'Classes' approach later.

Going back to the "Object Literals" and "Constructor functions", both of them creates object using the Object.create() builtin method behind the scenes.

However you can use this Object.create() method directly as well
*/


console.log("EXAMPLE A")


// here's a reminder of the Constructor functions approach, it is a function that uses the "this" key-world
function PersonA1(foreName, surName, age) {
	this.firstName = foreName
	this.lastName = surName
	this.age = age
	this.greetings = function () { return 'hello ' + this.firstName + ' ' + this.lastName }
	this.isAdult = function() {
		return this.age >= 18
	}
}

// Object.create() requires 2 input parameters:
let personA2 = Object.create(
	Object.prototype,

	{
		firstName:  {
			value: "Tony",
			enumerable: true,
			writable: true,
			configurable:  true
		},
		lastName:  {
			value: "Stark",
			enumerable: true,
			writable: true,
			configurable:  true
		},
		age:  {
			value: 40,
			enumerable: true,
			writable: true,
			configurable:  true
		}
	}
)

console.log(personA2)

// Notice how verbose everything has to be. That's why Object.create() isn't usually used directly in this way.

// Notice we have to set the enumerable/writable/configurable settings. These are called "property descriptors"

console.log("EXAMPLE B")
// Here's how to view the property descriptor settings for an object.

let personB1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

console.log(  Object.getOwnPropertyDescriptor(personB1, "firstName")  )
// The above outputs:

// {
// 	value: 'Bruce',
// 	writable: true,
// 	enumerable: true,
// 	configurable: true
// }