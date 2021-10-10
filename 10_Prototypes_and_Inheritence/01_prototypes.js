console.log("Example A")


// here's a constructor function
function PersonA(forename, surname){
	this.firstName = forename
	this.lastName = surname
}

console.log(typeof PersonA)
console.log(PersonA)


// When you create a constructor function, it comes with a default property called "prototype". 
// this prototype stores a memory pointer to a generic empty object:
console.log(PersonA.prototype) // {}

// fyi, as reminder, here's how you can create a generic empty object:
// let myObject = {}

// Also when you create new object using the constructor function,
let PersonA1 = new PersonA("Bruce", "Wayne")
let PersonA2 = new PersonA("Clark", "Kent")

console.log(PersonA1)     // PersonA { firstName: 'Bruce', lastName: 'Wayne' }

// ...then that object also comes with a default property, which is called "__proto__". This again contains a memory pointer to an empty object.
console.log(PersonA1.__proto__) // {} 

// note, there is no such thing as a "prototype" property for objects


console.log(PersonA1.prototype) // undefined

console.log("Example B")
// The object's __proto__ property's memory pointer is actually pointing to the same empty object as it's constructor function's
// prototype, i.e. :

console.log(PersonA.prototype === PersonA1.__proto__) // true

// That means if you want add new properties+methods to the constructor function, and want all the existing (already instantiated) objects
// to inherit them, the you can do this via the default prototype (or __proto__) property.  

PersonA2.__proto__.age = 40

console.log(PersonA.prototype)  // { age: 40 }
console.log(PersonA1.__proto__) // { age: 40 }
console.log(PersonA2.__proto__) // { age: 40 }

// Therefore the prototype/__proto__ can be used as a way to share things between a constructor function and it's objects. 


console.log("Example C")
// Also for objects, anything in the __proto__ section are actually directly accessible, without needing to drill down the __proto__ section:  

console.log(PersonA.age)  // undefined
console.log(PersonA1.age) // 40
console.log(PersonA2.age) // 40

// But they don't appear otherwise:
console.log(PersonA1) // PersonA { firstName: 'Bruce', lastName: 'Wayne' }
console.log(PersonA2) // PersonA { firstName: 'Clark', lastName: 'Kent' }

console.log("Example D")
// you can choose to override the __proto__ values for a particular object by doing something like:
PersonA2.age = 41
console.log(PersonA1.age) // 40
console.log(PersonA2.age) // 41


console.log(PersonA1) // PersonA { firstName: 'Bruce', lastName: 'Wayne' }
console.log(PersonA2) // PersonA { firstName: 'Clark', lastName: 'Kent', age: 41 }

// however the original value has remained unchanged, if you look inside proto
console.log(PersonA2.__proto__.age) // 40

// So to summarise. when you call for an object's property, javascript will first see if that property exists,
// if it does, then great,  otherwise it then looks in the __proto__ to find a match instead.

console.log("Example D")
// You can used the "hasOwnProperty" to see whether an object has a property with a given name:

console.log(PersonA1.hasOwnProperty('age'))  // false
console.log(PersonA2.hasOwnProperty('age'))  // true


delete PersonA2.age
console.log(PersonA2.hasOwnProperty('age'))  // false



// All these examples apply in the same way for an object's methods as well as properties. 
// Hence these prototype based methods should now make more sense:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#


console.log("Example E")
// You can break a constructor function's (or object's) connection to the __proto__ object. like this:

PersonA1.__proto__ = {age: 30}    // basically we've just created a brand new object, and the __proto__ is pointing to it. 
console.log(PersonA1.__proto__.age) // 30
console.log(PersonA1.age)  // 30

// but everything else says unneffected. 
console.log(PersonA2.__proto__.age) // 40
console.log(PersonA2.age) // 40
console.log(PersonA.prototype) //

// You can breaak a constructur functions's link to a prototype the same way:

PersonA.prototype = { age: 18 } // we've created a new object and the prototype's memory value is pointing to it. 
let PersonA3 = new PersonA("Peter", "Parker")
console.log(PersonA3.age) // 18


