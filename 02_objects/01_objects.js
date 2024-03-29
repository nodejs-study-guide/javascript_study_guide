'use strict'
// An object can be a user-defined composite datatype.

// Objects's are Golang's equivalent of "structs", i.e. a group of key-value stored inside a variable.
// Each key-value entry is referred to either as a "property" (if value stores some data) or "method" (if value stores a function)

// this object has 2 properties (name and age), and 2 methods (greetings and farewell)

const PI = Math.PI

console.log("Example A")
let person = {
	name: 'John',
	age: 32,
	PI,      // Instead of "PI: PI", we can use this shorthand, this only works when key-Name matches with variable name.
	greetings: function(){return `hello ${this.name}`},
	farewell: function(){return "goodbye " + this.name },
	myName() {return "My name is Clark Kent"},              // slightly shortand syntax
	myAlias: () => {return "I'm also known as Superman"}   // example of an arrow function.
}


console.log(typeof person)   // object

console.log(person)

console.log(person.name)            // John
console.log(person.age)             // 32
console.log(person.greetings())     // hello John
console.log(person.farewell())      // goodbye John
console.log(person.myName())        // My name is Clark Kent
console.log(person.myAlias())       // I'm also known as Superman

// accessing a non-existient property
console.log(person.gender)          // undefined     // noticed script doesn't fail.




console.log("Example B")
// Alternative syntax for accessing properties:
console.log(person['name'])            // John
console.log(person['age'])             // 32

// This syntax is useful if the key contains special characters, empty spaces,  e.g.:

// console.log(person['first name'])

// another possibility is if the key's name itself is stored inside another variable, e.g.

let currentAgeB = "age"
console.log(person[currentAgeB])  // 32




console.log("Example C")
// symbol is a special data type user for storing sensitive data.


let mySymbol = Symbol()
mySymbol = "secretHandShake"
let employee = {
	name: 'John',
	age: 32,
	[mySymbol]:  'myPassword'
}
console.log(employee)
// The only code that can access the secret data, is code that has access to the mySymbol variable.
// more info, see: https://app.pluralsight.com/course-player?clipId=5667e465-8dd0-45c8-8882-5d9aa4bb4e14

// Actually that is not true, because you can use the Object.getOwnPropertySymbols() function to view a symbol,
// then edit it. See section 6.10.3 of the javascript the definitive guide (7th edition) book.

// The only use for symbols, is to create properties that don't accidentally get overwritten elsewhere.

// also you can pass in an optional string arguement name when creating a symbol, e.g.

// let mySymbol = Symbol("an-argument")

// but this string is mainly used for debugging purposes only.

// note, the square brackets "[]" syntax is not something symbol specific. It is more broadly used for
// first evaluating the contents of square-brackets first. so you can do things like [myVar] or [myFuncWithReturnValue(x)]
// to dynamically work out the key's name.


console.log(employee.mySymbol)    // undefined

console.log(employee.secretHandShake) // myPassword



