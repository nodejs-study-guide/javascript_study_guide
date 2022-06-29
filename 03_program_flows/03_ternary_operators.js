'use strict'

// Ternary operator is basically an if-statement written into a single line. 
// The "?" is the "then"-part. and ":" is used for the else-part.



let price = 28 ;
// have to use semi-colon above because next line starts with a "("

(price > 20) ? console.log("expensive") : console.log("cheap")


// the round brackets around the condition part is actually optional, e.g.:

price > 20 ? console.log("expensive") : console.log("cheap");

// but is best practice to always include them for readability. 

// It can also be used to set variables:


let answer = (price > 25) ? "very expensive" : "a little expensive"

console.log(answer)
