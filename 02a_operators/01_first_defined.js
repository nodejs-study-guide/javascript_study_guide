'use strict'

let y = "world"
let x
x = "Tom"
let nameVar

// Here's a ternary operator:
nameVar = (x !== null && x !== undefined) ? x : y
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


// The first defined operator (??) lets you write the above line in a more shorthand form:
// nameVar = x ?? y


console.log(`hello ${ nameVar }`)