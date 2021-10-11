// Classes performs the exact same works as constructor functions (including inheritance). 
// The only difference is that the classes has a cleaner syntax than constructors. 


console.log("Example A")
// First here's a reminder of what a simple constructor function looks like:

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