console.log("EXAMPLE A")

let personA1 = {
	firstName: "John",
	lastName: "Smith",
	age: "30",
	greetings() { return 'hello ' + this.firstName + ' ' + this.lastName }
} 

// The following loops through all the properties. 
for (myKey in personA1){
	console.log(myKey + " is equal to " + personA1[myKey])
}

// but let's say you want to skip looping for "age" and "greetings"
// then you can do this by setting the corresponding enumerable settings to false:

console.log(Object.getOwnPropertyDescriptor(personA1, "age"))
console.log(Object.getOwnPropertyDescriptor(personA1, "greetings"))


Object.defineProperty(personA1, 'age', { enumerable: false })
Object.defineProperty(personA1, 'greetings', { enumerable: false })


console.log("EXAMPLE B")

// The following loops through all the "enumerable" enabled properties only. 
for (myKey in personA1){
	console.log(myKey + " is equal to " + personA1[myKey])
}

// They also don't show up in object.keys:

console.log(Object.keys(personA1))

// They also don't appear if you pass them through other packages:

console.log(JSON.stringify(personA1))

console.log("EXAMPLE C")
// The are are only hidden, meaning that are still accessible, but just not in the ways demoed above:
console.log(personA1.age) // 30
console.log(personA1.greetings())  // hello John Smith
