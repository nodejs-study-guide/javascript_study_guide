console.log("EXAMPLE A")
//You can create an array using square brackets:

let listA = [ 1, 2, 3 ];


console.log(listA)    // [ 1, 2, 3 ]

console.log(typeof listA) // object
console.log(listA[1])      // 2



// To create an empty array you just use empty square brackets.


console.log("EXAMPLE B")
// Here's another way to create an array, using the "Array" builtin object's "of" method:

let listB = Array.of( 1, 2, 3 );


console.log(listB)    // [ 1, 2, 3 ]

console.log(typeof listB) // object
console.log(listB[1])      // 2