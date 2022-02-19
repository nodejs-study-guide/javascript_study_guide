// You can create "accessor properties", aka getters and setters using methods.
//  e.g. here's how to do it when an object created using the "object literal way"

console.log("EXAMPLE A")
let personA1 = {
	firstName: "",
	lastName: "",
	getName: function () { return this.firstName + ' ' + this.lastName },
	setName: function (forename, surname) {
		this.firstName = forename
		this.lastName = surname
	},
}

console.log(personA1)

personA1.setName("Tony", "Stark")
console.log(personA1)
console.log(personA1.getName())



console.log("EXAMPLE B")
// And here's the same example, but this time via the constructor function approach:
function Person(foreName, surName, age) {
	this.firstName = foreName
	this.lastName = surName
	this.getName = function () { return 'hello ' + this.firstName + ' ' + this.lastName }
	this.setName = function (name1, name2) {
		this.firstName = name1
		this.lastName = name2
	}
}


let personB1 = new Person("Clark", "Kent")

console.log(personB1)
personB1.setName("Tony", "Stark")


console.log(personB1)
personB1.getName()


console.log("EXAMPLE C")

// However javascript also provides some dedicated syntax in the form of property attributes for creating getters+setters:
// first let's say we have this object:


let personC = {
	name: {
		first: "Homer",
		last: "Simpson",
	},
	age: 40
}

console.log(personC)

// Next, we use the the "definProperty" method from the standard builtin "Object" object. This method requires three input parameter.
// 1. The object we're creating the setter/getter for - which in this case is "personC"
// 2. The name for calling the getter/setter - which in this case is "fullName"
// 3. A block of code encased in curly braces. This block is where you define your getters and setters. getters are defined using "get" and setters are
//    defined using "set".

Object.defineProperty(personC, 'fullName',
	{
		get: function() {
			return this.name.first + ' ' + this.name.last
		},

		set: function(value) {
			this.name.first = value.split(' ')[0]
			this.name.last = value.split(' ')[1]
		},
	}
)


// Here's how we call the getter:
console.log(personC.fullName)

// Notice that fullname isn't really a method, which is why we didn't do: personC.fullName()

// Here's how we call the setter:
personC.fullName = "James Bond"
// notice how we call the setter in the same way as we did for getter, i.e we didn't do personC.fullName()


// Here's how we call the getter again:
console.log(personC.fullName)

// To summarise, from a distance, it looks like "fullName" is just another property of the personC object, when in reality that's not true.



console.log(personC.name.first)
console.log(personC.name.last)
