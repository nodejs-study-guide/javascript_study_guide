'use strict'

// all variables of the type "object" inherits a set of properties, from the master data type "Object".
// The only exception are the primitive data types, e.g. string.

let currentDate = new Date()

let personA = {
	title: 'Mr',
	firstName: 'John',
	lastName: 'Smith',
	greetings: function () {
		return 'Hello my name is ' + this.firstName + ' ' + this.lastName
	},
	getAge: function (age) {
		return 'I am ' + age + ' years old'
	},
}

console.log(currentDate.constructor.toString()) // function Date() { [native code] }    // this indicates its a date object.

console.log(personA.constructor.toString()) // function Object() { [native code] }
console.log(personA.greetings.constructor.toString()) // unction Function() { [native code] }
//console.log(personA.constructor.firstName.toString()) // undefined



