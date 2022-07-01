'use strict'

console.log("Example A")


// here's a constructor function
function Person(forename, surname){
	this.firstName = forename
	this.lastName = surname

	this.greetings = function () { return 'hello ' + this.firstName + ' ' + this.lastName }
}

console.log(typeof Person) // function
console.log(Person) // [Function: Person]


console.log("Example B")
// In javascript, a function is also an object. So when you create a constructor function,
// it comes with some default properties, one of which is called "prototype".
// these properties's enumerable setting is set to false, so to view them you have to do:
console.log(Object.getOwnPropertyNames(Person)) // [ 'length', 'name', 'prototype' ]


// this prototype stores a memory pointer to a generic empty object:
console.log(Person.prototype) // {}

console.log("Example C")

// This might look like an empty object, but in actual fact it does contain properties,
// but again these properties are hidden, because their enumerable property is set to false.
// So here's a work around instead:
console.log(Object.getOwnPropertyNames(Person.prototype)) // [ 'constructor' ]
// This shows that this prototype has a property called "constructor"

console.log(typeof Person.prototype.constructor)  // function

console.log("Example D")

// let's now take a look at what this function looks like
console.log(Person.prototype.constructor.toString()) // this outputs:
// function Person(forename, surname){
// 	this.firstName = forename
// 	this.lastName = surname
//
// 	this.greetings = function () { return 'hello ' + this.firstName + ' ' + this.lastName }
// }




console.log("Example E")
// fyi, as reminder, here's how you can create a generic empty object:
// let myObject = {}




// Also when you create new objects using constructor function, e.g.:
let Person1 = new Person("Bruce", "Wayne")
let Person2 = new Person("Clark", "Kent")

// these objects also comes with default properties (which again are hidden):
console.log(Person1)     // Person { firstName: 'Bruce', lastName: 'Wayne' }

console.log(Object.getOwnPropertyNames(Person1))




console.log("Example E1")
// ...then that object also comes with a default property, which is called "__proto__". This again contains a memory pointer to an empty object.
console.log(Person1.__proto__) // {}

// note, there is no such thing as a "prototype" property for objects. Actually there is, but most
// objects don't have them. only a few of them do. Those objects are typically ones that you want to act as
// parent-prototype-objects for other object to inherit from.


console.log(Person1.prototype) // undefined

console.log("Example F")
// The object's __proto__ property's memory pointer is actually pointing to the same empty object as it's constructor function's
// prototype, i.e. :

console.log(Person.prototype === Person1.__proto__) // true

// That means if you want to add new properties+methods to the constructor function, and want all the existing (already instantiated) objects
// to inherit them, then you can do this via the default prototype (or __proto__) property.

Person2.__proto__.age = 40

console.log(Person.prototype)  // { age: 40 }
console.log(Person1.__proto__) // { age: 40 }
console.log(Person2.__proto__) // { age: 40 }

// Therefore the prototype/__proto__ can be used as a way to share things between a constructor function and it's objects.


console.log("Example G")
// Also for objects, anything in the __proto__ section are actually directly accessible, without needing to drill down the __proto__ section:

console.log(Person.age)  // undefined
console.log(Person1.age) // 40
console.log(Person2.age) // 40

// But they don't appear otherwise:
console.log(Person1) // Person { firstName: 'Bruce', lastName: 'Wayne' }
console.log(Person2) // Person { firstName: 'Clark', lastName: 'Kent' }

console.log("Example H")
// you can choose to override the __proto__ values for a particular object by doing something like:
Person2.age = 41
console.log(Person1.age) // 40
console.log(Person2.age) // 41


console.log(Person1) // Person { firstName: 'Bruce', lastName: 'Wayne' }
console.log(Person2) // Person { firstName: 'Clark', lastName: 'Kent', age: 41 }

// however the original value has remained unchanged, if you look inside proto
console.log(Person2.__proto__.age) // 40

// So to summarise. when you call for an object's property, javascript will first see if that property exists,
// if it does, then great,  otherwise it then looks in the __proto__ to find a match instead.

console.log("Example I")
// You can used the "hasOwnProperty" to see whether an object has a property with a given name:

console.log(Person1.hasOwnProperty('age'))  // false
console.log(Person2.hasOwnProperty('age'))  // true


delete Person2.age
console.log(Person2.hasOwnProperty('age'))  // false



// All these examples apply in the same way for an object's methods as well as properties.
// Hence these prototype based methods should now make more sense:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#


console.log("Example J")
// You can break a constructor function's (or object's) connection to the __proto__ object. like this:

Person1.__proto__ = {age: 30}    // basically we've just created a brand new object, and the __proto__ is pointing to it.
console.log(Person1.__proto__.age) // 30
console.log(Person1.age)  // 30

// but everything else says unneffected.
console.log(Person2.__proto__.age) // 40
console.log(Person2.age) // 40
console.log(Person.prototype) //

// You can breaak a constructur functions's link to a prototype the same way:

Person.prototype = { age: 18 } // we've created a new object and the prototype's memory value is pointing to it.
let PersonA3 = new Person("Peter", "Parker")
console.log(PersonA3.age) // 18



// Another explanation of inheritence.



//
//
// function Person(name,age){
// 	this.name = name
// 	this.age = age
// }
//
// // All functions, are a type of objects, which in turn means that functions can have
// // properties. By default, all functions automatically get's setup with a property called
// // "prototype". This property, is only of interest when the function happens to be a constructor
// // function.
//
// // This prototype is a place where you can put properties, that you want
// // all the objects to inherit.
// Person.prototype.title = "Mr"
//
//
// let pete = new Person("Pete", 18)
//
//
// console.log(Person.prototype)  // { title: 'Mr' }
// console.log(pete)  // Person { name: 'Pete', age: 18 }  // it only shows own properties not inherited ones.
//
// console.log(pete.title) // Mr
//
// // As you can see the object created by the constructor, inherited all
// // the properties stored in the contstructor's "prototype" property.
//
//
//
// // Note, since "title" is an "inherited" rather than an "own" property, it means it doesn't get listed here:
// console.log(Object.getOwnPropertyNames(pete))   // [ 'name', 'age' ]
// console.log(pete)  // Person { name: 'Pete', age: 18 }  // it only shows own properties, not inherited ones.
//
//
// console.log("Reclect.ownKeys example")
// // This is similar to "Object.getOwnPropertyNames()" but also prints out Symbols too.
// console.log(Reflect.ownKeys(pete))  // [ 'name', 'age' ]
//
// // to view all the properties a object inherited from the constructor, use this special "__proto__" property,
// console.log(pete.__proto__)  // { title: 'Mr' }
//
// // The "__proto__" is actually a memory pointer to the constructor's "prototype" field. That means. you can do
// // something like this.
//
// let anthony = new Person("Tony", 45)
//
// anthony.__proto__.title = "Mrs"
//
// console.log(pete.__proto__) // { title: 'Mrs' }
//
// // Note: This concept might come in handy when writing mocks in unit tests. But not sure yet.
//
// // So if you don't want to change the "title" for all objects+constructor, but want to do an override it
// // for a particular object then, shouldn't edit anything inside __proto__, instead do it more directly
// // like this:
//
// pete.title = "Mr"
// console.log(pete) // Person { name: 'Pete', age: 18, title: 'Mr' }
// console.log(pete.__proto__)  // { title: 'Mrs' }
//
//
//



