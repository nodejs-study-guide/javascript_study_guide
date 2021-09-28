console.log("EXAMPLE A")
// spread operators spreads expands an array into individual arguments before 
// feeding it into a function. It's kind of like how a "rest parameter" works 
// but in reverse. 

function greet(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2 )
}

let names = ['John', 'Mary'];

// notice we pass in the ellipsis symbol (...) which kinda explodes the array into individual 
// comma seperated arguments before feeding them into the 'greet' function. 
greet(...names) // Hello John and Mary


console.log("EXAMPLE B")
// It can also split a string too. 
function greet(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2 );
}

let letters = 'ab';
greet(...letters); // Hello a and b



console.log("EXAMPLE B")
// spread operator can be used to make a copy of an array:

let listB1 = ["a", "b", "c"]
let listB2 = [...listB1]

console.log(listB1) // [ 'a', 'b', 'c' ]
listB2[1] = "z"
console.log(listB2) // [ 'a', 'z', 'c' ]

// Notice the above, we did a deep copy. This is true for an array of primitive values. 
