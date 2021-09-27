console.log("EXAMPLE A")
// Slice = You can create an array using a subset of another array.

let listA = [ "a", "b", "c", "d", "e", "f" ];


console.log(listA)    // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

let sliceOfListA = listA.slice(2,5)

console.log(listA)           // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(sliceOfListA)    // [ 'c', 'd', 'e' ]


console.log("EXAMPLE B")
// Splice = used for altering an existing array. 

let listB = [ "a", "b", "c", "d", "e", "f" ];


console.log(listB)    // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// This means, starting from index "2" (c) delete the next 2 items (including the current one, "c"), which in this case would be "c" and "d".
listB.splice(2,2)

console.log(listB)           // [ 'a', 'b', 'c', 'f' ]




console.log("EXAMPLE C")
// Splice can also insert items into the list 

let listC = [ "a", "b", "c", "d" ];


console.log(listC)    // [ 'a', 'b', 'c' ]

// This means, starting from index "2" (c) delete 1 . item, and in it's place insert 2 items,  "xxx" and "yyy".
listC.splice(2, 1, "xxx", "yyy")

console.log(listC)           // [ 'a', 'b', 'xxx', 'yyy', 'd' ]