"use strict"


/*

If an object is created using a class, then that object is a member of that class.

However an object-literal isn't created via a class.

However all objects created using the object-literal approach, by default inherits
all the properties from a special builtin object called: "Object.prototype"

You can see what an object-literal inherits by running:

*/


console.log(Object.getOwnPropertyNames(Object.prototype))

// [
// 	'constructor',
// 	'__defineGetter__',
// 	'__defineSetter__',
// 	'hasOwnProperty',
// 	'__lookupGetter__',
// 	'__lookupSetter__',
// 	'isPrototypeOf',
// 	'propertyIsEnumerable',
// 	'toString',
// 	'valueOf',
// 	'__proto__',
// 	'toLocaleString'
// ]

// note, you can't view this above info by simply running:

// console.log(Object.prototype)

// That's because these properties have been set to non-enumerable. (see - https://stackoverflow.com/a/31173593)

// As a result, when we create an object using the object-literal approach:

let person = {
	firstName: "Peter",
	age: 18
}


console.log(person)

// and then make use of the inherited properties:
console.log(person.hasOwnProperty("age")) // true
console.log(person.hasOwnProperty("lastname")) // false

// fyi about the hasOwnProperty method - // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
