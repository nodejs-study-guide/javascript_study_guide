'use strict'




console.log("EXAMPLE C")


let addC = function outerC() {
    let counter = 0
    function innerC() {
        counter = counter + 1
        return counter
    }

    return innerC
}

// Here's the outer function creates a scope in which it creates the counter variable, and it gives
// an initial default value of 0. Only the inner function can see+use this counter variable. So we
// can use this inner function to act as our counter for add function. The inner function can't be accessed directly
// because it's inside the outer function's scope. So to use the inner function, we have to return it.

// This outer function + nested function setup, is an example of a "closure". The nested function
// is giving you access to content from the outer function's scope.

// Also the outer+inner function is captured in "add", which is a function expression.
// So just calling add(), means both outer+inner function are executed, and returns the inner function.

console.log(  addC()  )  // [Function: innerC]


// If we want to run the inner function, we can do:

console.log(  addC()()  ) // 1
console.log(  addC()()  ) // 1
console.log(  addC()()  ) // 1

// each call keeps executing the both outer and then inner functions. So we need a away to
// only execute the outer function once:



let addC1 = addC() // Here we're running the entire function once, and capturing just the return value,
                 // which is the function.

console.log(  addC1()  )  // 1
console.log(  addC1()  )  // 2
console.log(  addC1()  )  // 3




console.log("EXAMPLE D")
// We can now refactor the "add" function expression further by converting it into an IIFE.

let addD = (function outerD() {
    let counter = 0
    function innerD() {
        counter = counter + 1
        return counter
    }

    return innerD
})()

// this IIFE invokes straight away and ends up returning the function, "innderD" which gets saved to:
// addD variable

console.log(typeof addD) // function
console.log(addD.toString()) // This outputs:
// function innerD() {
//     counter = counter + 1
//     return counter
// }

console.log(  addD()  ) // 1
console.log(  addD()  ) // 2
console.log(  addD()  ) // 3

