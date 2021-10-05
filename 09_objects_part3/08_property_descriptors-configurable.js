console.log("EXAMPLE A")
// configurable - set's whether the "enumerable" property descriptor is read-only. 
// 		  i.e. it prevents you from changing property descriptors. 

let personA1 = {
	firstName: "John",
	lastName: "Smith",
	age: "30",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
} 


console.log(Object.getOwnPropertyDescriptor(personA1, "firstName"))

// let's sauy we want to disable the ability to configure the personA1.name property's writable and enumerable 
// descriptor properties, then we cna do:


Object.defineProperty(personA1, 'firstName', { configurable: false })


// you can still edit the writable setting. 
Object.defineProperty(personA1, 'firstName', { writable: false })

// But attempting to change the enumerable setting would give an error:
// Object.defineProperty(personA1, 'firstName', { enumerable: false })

console.log("EXAMPLE B")

// you also can't delete the firstName property:

delete personA1.firstName    // this get's ignored.

console.log(personA1)


// Also as soon as configurable is set to false, it can't be set back to true again. 
// So the following also causes an errors:
// Object.defineProperty(personA1, 'firstName', { configurable: true })

// This is a bit like get locked out of your car. 



console.log(Object.getOwnPropertyDescriptor(personA1, "firstName"))
