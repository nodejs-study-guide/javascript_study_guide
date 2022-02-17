'use strict'

// Standard builtin objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

console.log("EXAMPLE A")
// The "Date" is a commonly used builtin object. This object exists by default in the javascript run time.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log(typeof Date)  // function     // functions are also a type of object.

// This Date object has some methods:
console.log(Date.now())   // 1632588346184



// however other methods of Date (all the "prototype" methods), are accessible by creating an object of the type "Date". That's done using the "new" key word:


let dateStamp = new Date()


console.log(typeof dateStamp)  // object

console.log(dateStamp.getDate())




// There are 2 ways to create a string variable, the primitive way:

let s = "hello"
console.log(s)    // "s" is referred to as a "primitive"

// and the constructor way, which involves using the "new" key word.

let sc = new String('hello')

console.log(sc) // "sc" is referred to as a "object"


// note javascript automatically converts string primitives to string objects behind the
// scenes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#:~:text=String%20literals%20(denoted,the%20property%20lookup.

