'use strict'

let y = "world"
let x
// x = "Tom"
let nameVar


// nameVar = (x !== null && x !== undefined) ? x : y

// The first defined operator (??) lets you write the above line in a more shorthand form:
nameVar = x ?? y


console.log(`hello ${ nameVar }`)