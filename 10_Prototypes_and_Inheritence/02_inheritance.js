console.log("Example A")


// here's a constructor function
function PersonA(forename, surname){
	this.firstName = forename
	this.lastName = surname
}

console.log(typeof PersonA)
console.log(PersonA)

// Also when you create new object using the constructor function,
let PersonA1 = new PersonA("Bruce", "Wayne")
console.log(PersonA1)


console.log("Example B")
// The constructor function is itself an object, that means it has a __proto__ of it's own:
console.log(PersonA.__proto__) // {}            

// this empty object is still an object, which means it also has it's own __proto__

console.log(PersonA.__proto__.__proto__) // [Object: null prototype] {}

// This means that this __proto__ point's to the standard builtin "Object" object's prototype. This is the top level object's prototype:

console.log(Object.prototype) // [Object: null prototype] {}

// There's nothing else above that, i.e. it's null:

console.log(Object.prototype.__proto__) // null
console.log(PersonA.__proto__.__proto__.__proto__) // null

// console.log(Person.__proto__.__proto__.__proto__) // null


// here we can see that we have a chain of inheritence. 
console.log("Example C")
console.log(PersonA1.__proto__) // {}
console.log(PersonA1.__proto__.__proto__) // [Object: null prototype] {}
console.log(PersonA1.__proto__.__proto__.__proto__) // null
