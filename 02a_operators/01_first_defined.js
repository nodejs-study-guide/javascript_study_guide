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



// Here's an example of Optional chaining (aka conditional chaining)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
}
  
const dogName = adventurer.dog?.name
console.log('The dog\'s name is: ' + dogName)

const catName = adventurer.cat?.name
console.log('The cats\'s name is: ' + catName)