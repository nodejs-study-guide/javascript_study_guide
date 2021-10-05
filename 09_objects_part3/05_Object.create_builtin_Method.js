/*
There are 3 ways to create javascript objects:

1. Object Literals           // this uses Object.create() method behind the scenes
2. Constructor functions     // this uses Object.create() method behind the scenes
3. Classes

So far we have only looked at creating objects using the "Object Literals" and the "Constructor functions" approach. 
Both of them creates object using the Object.create() builtin method behind the scenes.  

However you can use this Object.create() method directly as well
*/


console.log("EXAMPLE A")



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
