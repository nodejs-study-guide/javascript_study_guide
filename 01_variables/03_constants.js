'use strict'

// node  01_variables/03_constants.js 

// const are declared using the "const" keyword. 
// you cannot change the value of a constant after it's been declared. 

const price = 10
console.log(price)

// You have to set a value when declaring a constant. I.e. you'll get an error if you try this:
// const priceB 
// console.log(priceB)



console.log("EXAMPLE B")
// However if constant contains a composite object, e.g. an array, then you can change the 
// internal values, e.g.:

const myList = ["apple", "banana", "orange", "mango"]

console.log(myList)
console.log(myList[2])

myList[2] = "coconut"

console.log(myList)
console.log(myList[2])

// You can make your constant properly read-only using the Object.freeze()
Object.freeze(myList)

// the following line will now give an error:
//myList[2] = "Peach"

// however, that only make it read only for one level of nesting. if you constant has 2 or mover levels of nesting
// then you need to use something like the immutable.js library
// https://immutable-js.com/


// It's best practice to use const as often as possible. Only use "let" when you 
// expect your variable's value to potentially change. 