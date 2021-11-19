'use strict'

// Ternary operator is basically an if-statement written into a single line. 
// The "?" is the "then"-part. and ":" is used for the else-part.



// not sure why but needed to use semicolon in this line
let price = 28 ;


(price > 20) ? console.log("expensive") : console.log("cheap");

// Found a weird bug if I leave out the semicolon at the end of each line

// the round brackets around the condition part is actually optional, e.g.:

price > 20 ? console.log("expensive") : console.log("cheap");

// but is best practice to always include them for readability. 

// It can also be used to set variables:


let answer = (price > 25) ? "very expensive" : "a little expensive"

console.log(answer)
