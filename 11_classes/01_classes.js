// Classes performs the exact same work as constructor functions (including inheritance). 
// The only difference is that the classes have a cleaner syntax than constructors. 


console.log("Example A")
// First here's a reminder of what a simple constructor function looks like:

function PersonA(foreName, surName, age) {
	this.firstName = foreName
	this.lastName = surName
	this.age = age
	this.fullname = function () { return this.firstName + ' ' + this.lastName }
	this.isAdult = function() { 
		return this.age >= 18
	}
}


// The key indicator that the above function is a constructur function, is the use of the "this." key word. Also, constructor
// functions don't use the "return" key word.

// To call this constructor function, we use the "new" key word:

let superman = new PersonA("Clark", "Kent", 40)

console.log(superman)

console.log(superman.greetings())



console.log("Example B")

// Now heres the above constructor function re-written in the form of a class. A class is defined using the 
// "class" key word:


class PersonB {

	// Within a class, you can define a "constructor" block, using the constructor key word.
	// This is where you set the properties for your object.
	// The constructor's code block automatically get's executed when a new object is created.  
	constructor(foreName, surName, age) {
		this.firstName = foreName
		this.lastName = surName
		this.age = age
	}
	
}

// noticed we use the same "new" key word to drive the class.
let spiderman = new PersonB("Peter", "Parker", 18)

console.log(spiderman)   // PersonB { firstName: 'Peter', lastName: 'Parker', age: 18 }
spiderman.age = 19
console.log(spiderman)   // PersonB { firstName: 'Peter', lastName: 'Parker', age: 19 }
