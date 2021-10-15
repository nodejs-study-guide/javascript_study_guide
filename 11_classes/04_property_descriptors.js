console.log("Example A")

class PersonA {

	constructor(foreName, surName, age) {
		this.firstName = foreName
		this.lastName = surName
		this.age = age
	}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	set fullName(value) {
		this.firstName = value.split(' ')[0]
		this.lastName = value.split(' ')[1]
	}


	isAdult() {
        return this.age >= 18
    }

}

let spiderman = new PersonA("Peter", "Parker", 19)

// As mentioned earlier, you can think of a pair of getters and setters as 2 halfs that makes up an ordinary 
// property, which in this example is called "fullName". However this property doesn't 
// show up when you try to print it out:

console.log(spiderman)  // { firstName: 'Peter', lastName: 'Parker', age: 19 }

// That's because of 2 reasons:

// - getter/setter based properties, have their own respective enumerable 
//   property descriptor attribute, and this attribute is by default set to false.

// - Also since getters/setters are relatively static (from one object to the next) compared to 
//   ordinary properties, it means that they live in the Class's prototype. 
//   Speaking of which, at this point I should mention that classes, like constructor functions,
//   have their own prototypes. 

// Hence to make the "fullname" (getter/setter) psuedo property enumerable.
// we can go back to using the Object.defineProperty

console.log("Example B")
console.log(PersonA.prototype)   // {}
Object.defineProperty(PersonA.prototype, 'fullName', {enumerable: true})

console.log(PersonA.prototype) // { fullName: [Getter/Setter] }


console.log(spiderman.__proto__) // { fullName: [Getter/Setter] }



