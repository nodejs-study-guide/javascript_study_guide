// node 01_variables/05_strings.js 


// EXAMPLE A
// you can embed variables inside a string variable using back ticks and the ${xxx} notation. 

let username = 'John'
let greetingsA = `Hello ${username}`

console.log(greetingsA)



// EXAMPLE B
// here's how to concatenate strings
let messageB = "hello";
messageB = messageB + " world";

console.log(messageB)

// EXAMPLE A
// There's lots of builtin string "methods" available. VScode's intellisense will list them out for you. 
console.log("EXAMPLE C")
console.log(messageB.toUpperCase())

// For more info about these builtin string methods see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// EXAMPLE B
// There's lots of builtin string "properties" available, e.g the "length" property. VScode's intellisense will list them out for you. 
console.log("EXAMPLE D")
console.log(messageB.length)
console.log(typeof messageB.length)

