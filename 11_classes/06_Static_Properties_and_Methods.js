console.log("Example A")
// Earlier we saw that we have to create an object before we can use methods/properties of that 
// class. 

class Person {

	constructor(foreName, surName, age) {
		this.firstName = foreName
		this.lastName = surName
		this.age = age
	}


	isAdult() {
        return this.age >= 18
    }

	greetings() {
		return "Hello, this is an object's method"
	}

	// here we used the "static" key word to create a static method
	static greetings() {
		return "Hi there, this is a static method"
	}

	// here we used the "static" key word to create a static property
	static nationality = "USA"
}



let Superman = new Person("Clark", "Kent", 32)

console.log(Superman.greetings()) // Hello, this is an instance method


// with static methods you don't need to create an object before hand, instead, 
// you use it directly from the class, using "className.methodName()" syntax. 
console.log(Person.greetings()) // Hi there, this is a static method

// we access static properties in a similar way:
console.log(Person.nationality) // USA
