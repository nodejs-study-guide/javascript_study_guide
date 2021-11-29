'use strict'

// The following example fails with the error:     Cannot access 'messageA' before initialization

// console.log("EXAMPLE A")
// function greetingsA() {
//   console.log(messageA)
// }

// greetingsA()
// let messageA = "Hello John"



// To fix this we can insert a small 2 second delay

console.log("EXAMPLE B")
function greetingsB() {
    setTimeout(_ => console.log(messageB), 2000)
}

greetingsB()
let messageB = "Hello David"



// Rather than put an aribitary 2 second sleep, we can take the "asap" appraoch,
// by using the setImmediate function - https://nodejs.dev/learn/understanding-setimmediate:

console.log("EXAMPLE C")
function greetingsC() {
    setImmediate(_ => console.log(messageC))
}

greetingsC()
let messageC = "Hello Peter"