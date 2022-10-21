console.log("EXAMPLE A")
//You can create an array using square brackets:

let listA = [ 1, 2, 3 ];


console.log(listA)    // [ 1, 2, 3 ]

console.log(typeof listA) // object
console.log(listA[1])      // 2



// To create an empty array you just use empty square brackets.


console.log("EXAMPLE B")
// Here's another way to create an array, using the "Array" builtin object's "of" method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):

let listB = Array.of( 1, 2, 3, "A" );

// you can mix and match data types. 
console.log(listB)    // [ 1, 2, 3, "A" ]

console.log(typeof listB) // object
console.log(listB[1])      // 2
console.log(listB[100])      // undefined  

// But best practice to use arrays to store data of the same data type. 


// to check if a variable is an array you can do:

console.log(Array.isArray(listB)) // true




console.log("EXAMPLE C")
// Adding to an array:

let listC = Array.of( 1, 2, 3);

console.log(listC) // [ 1, 2, 3 ]

listC[3] = 85
console.log(listC) // [ 1, 2, 3, 85 ]

listC[5] = 85
console.log(listC)  // [ 1, 2, 3, 85, <1 empty item>, 85 ]


// editing a value in an array:
listC[1] = 10
console.log(listC)   // [ 1, 10, 3, 85, <1 empty item>, 85 ]





console.log("EXAMPLE D")
//Appending to an array is done using builtin methods:

let listD = [ 1, 2, 3 ];


console.log(listD)    // [ 1, 2, 3 ]

listD.push("hello")

console.log(listD)    // [ 1, 2, 3, 'hello' ]

// removing the last element off of an array is done using the "pop" builtin method:

lastValue = listD.pop()
console.log(listD)   // [ 1, 2, 3 ]
console.log(lastValue) . // hello

console.log("EXAMPLE E")
//Take a value off from the beginning of an array:

let listE = [ 1, 2, 3 ];
nextValue = listE.shift()

console.log(listE)    // [ 2, 3 ]
console.log(nextValue)  // 1

// To insert a value to the beginning of an array we use the unshift method:

listE.unshift("hello")
console.log(listE)    // [ 'hello' , 2, 3 ]
