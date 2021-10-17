'use strict'

// undefined: you create a variable without assigning value to it.
// null: you had a variable with data, but emptied it out by using "null":


// Declared but not initialised:
let myVar
console.log(myVar)   // undefined


// Now we initialised it:
myVar = 10
console.log(myVar)   // 10

// now we empty out the variable
myVar = null
console.log(myVar)   // null


// Here's another way to empty out the variable, but this approach is not recommended:
myVar = undefined
console.log(myVar)   // undefined

// Setting it to undefined isn't recommended, because it becomes unclear on whether or not variable was initiailized prior to being set
// to undefined. 