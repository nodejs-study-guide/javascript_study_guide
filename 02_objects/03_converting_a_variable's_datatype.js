'use strict'

// to convert a number to a string, we can use the primitive type's builtin 'toString()' method. 



console.log("EXAMPLE A")
let varA = 123
console.log(typeof varA) // number

varA = varA.toString()
console.log(typeof varA) // string

// Notice a variable can store any data type, from one minute to the next. E.g. varA initially stored an number, but later on it stored 
// a number. It's not very strict. 



console.log("EXAMPLE B")
// However, if you want to go the other way round, i.e. convert a string to a number. You can't use the "toNumber" method, because 
// that doesn't exist.
let varB = "456"
console.log(typeof varB) // string

// This builtin toNumber() method doesn't exist. 
// varB = varB.toNumber()

// Instead the global object, "Number" comes with a method called "parseFloat"  that can do this conversion:
varB = Number.parseFloat(varB)
console.log(typeof varB) // number

// To summarise, if an object's builtin method can't get the job done, then try seeing if any of the methods 
// provided by any of the global objects can be used instead. 


// You can think of a builtin object's properties and methods as a set of general purpose properties and methods



console.log("EXAMPLE C")
varC = Number.parseFloat("A100")
console.log(varC)       // NaN       =  Not a Number





