'use strict'
console.log("EXAMPLE A")

// Rest Parameters are the same thing as golang's variadic function. It even uses the same dotdotdot notation, "...", aka ellipsis. 

let greetingsA = function greet(...names) {
    names.forEach(
        name => console.log('Hi ' + name)
    )
}

greetingsA('Mary', 'John', 'James')
// Hi Mary
// Hi John
// Hi James


console.log("EXAMPLE B")

// Other parameters can be passed in too, but in this scenario, the rest parameter needs
// to be defined at the end of all the other functions.  

let greetingsB = function greet(message, ...names) {
    names.forEach(
        name => console.log(message + ' ' + name)
        )
}

greetingsB('Welcome', 'Mary', 'John', 'James')
// Welcome Mary
// Welcome John
// Welcome James
