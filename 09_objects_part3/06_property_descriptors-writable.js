console.log("EXAMPLE A")
// Here's how to view the property descriptor settings for an object. 

let personA1 = {
	firstName: "Bruce",
	lastName: "Banner",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

console.log(Object.getOwnPropertyDescriptor(personA1, "lastName"))
// The above outputs:

// {
// 	value: 'Bruce',
// 	writable: true,
// 	enumerable: true,
// 	configurable: true
// }

// writable - This let you set whether you can edit the properties value.
// enumerable - This sets whether a property is visible when the object's properties
//		are iterated via a for-in loop
// configurable - set's whether the first two settings "writable" and "enumerable" are read-only. 
// 		  i.e. it prevents you from changing property descriptors.


// Here's how to change a description property. This is done using the buitlin "Object"'s defineProperty method.  
// The following makes personA1.lastName read-only: 



console.log(personA1.lastName) // Banner

Object.defineProperty(personA1, 'lastName', { writable: false })
console.log(Object.getOwnPropertyDescriptor(personA1, "lastName"))

personA1.lastName = "Wayne"   // this get's ignored.  
console.log(personA1.lastName) // Banner





console.log("EXAMPLE B")
// if a properties stores an object, then this object's properties 
// are editable, even if the property itself is ready-only

let personB1 = {
	name: {
		firstName: "Clark",
		lastName: "Kent"
	},
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
}

Object.defineProperty(personB1, 'name', { writable: false })
console.log(Object.getOwnPropertyDescriptor(personB1, "name"))

console.log(personB1.name)     // { firstName: 'Clark', lastName: 'Kent' }
personB1.name = "Clark Kent"   // this get's ignored.  
console.log(personB1.name)     // { firstName: 'Clark', lastName: 'Kent' }

personB1.name.lastName = "Cable"   // this actually get's updated. 

console.log(personB1.name)  //  firstName: 'Clark', lastName: 'Cable' }



console.log("EXAMPLE C")
// if you do want to make all of the nested object tree read-only, then you need to use the "freeze" method:

console.log(personB1.name.firstName) // Clark
Object.freeze(personB1.name)

personB1.name.firstName = "Martha"   // this now get's ignored. 
console.log(personB1.name.firstName) // Clark


