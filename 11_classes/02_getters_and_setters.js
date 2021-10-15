// earlier we saw how to create getters and setters for constructor functions approach. 
// Now we'll see how to do the same thing with classes. 

console.log("Example A")

class PersonA {

	constructor(foreName, surName, age) {
		this.firstName = foreName
		this.lastName = surName
		this.age = age
	}

	// To create a getter, you just use the "get" key word.:
	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	// To create a setter, you just use the "set" key word.:
	set fullName(value) {
		this.firstName = value.split(' ')[0]
		this.lastName = value.split(' ')[1]
	}



}

let spiderman = new PersonA("Peter", "Parker", 18)

// notice how we refer to the getter like a property. 
console.log(spiderman.fullName) // Peter Parker

// Notice how we call the setter, like we're setting an object's property.
spiderman.fullName = "Tom Holland"
console.log(spiderman.fullName) // Peter Parker


// Hence you think of getters and setters as 2 halfs that makes up an ordinary 
// property, which in this example is called "fullName"
