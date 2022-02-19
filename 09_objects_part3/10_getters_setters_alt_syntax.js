'use strict'

console.log("EXAMPLE A")
let personA1 = {
	firstName: "",

	// here we use the special "set" and "get" to label some methods as setters and getters.
	// not, both getter's and setter's function have to have the same name,
	// in order to bit part of the same getter/setter pair.
	get firstNameAccessor() { return this.firstName },
	set firstNameAccessor(value) { this.firstName = value.charAt(0).toUpperCase() + value.slice(1) }
}

// Since we now have a setter that can set a value for the of the "firstName" property, we should use the
// setter to set the name (rather than using personA1.firstName property directly):
personA1.firstNameAccessor = "tony"
// notice how we call the "accessor-property"'s function in the same style as a normal "data-property".



console.log(personA1) // { firstName: 'Tony', firstname: [Getter/Setter] }

personA1.firstName = "Peter"


// but I don't think there's a way to block someone from using the personA1.firstName property directly
// for setting
console.log(personA1)