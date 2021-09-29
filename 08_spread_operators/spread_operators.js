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

// but this approach doesn't work for an array of objects. 




console.log("EXAMPLE B")

// notice there's no return statement 
function Person (firstName, lastName, age, eyeColor){
  this.firstName= firstName
  this.lastName= lastName
  this.age= age
  this.eyeColor= eyeColor
}

// The "new" keyword captures the object stored inside "this" 
let person1 = new Person('John','Smith',23,'brown')
let person2 = new Person('David','Stride',34,'blue')

let peopleA = [person1, person2]

let peopleB = [...peopleA]

console.log(peopleA)
console.log(peopleB)

console.log("changing age")

person2.age = 60 // this ends up changing it for both arrays, PeopleA and PeopleB. That's becuase arrays holds pointers to objects. 

console.log(peopleA)
console.log(peopleB)


console.log("EXAMPLE C")

// Concatenate 2 arrays together. 

listC1 = ["a", "b", "c"]
listC2 = ["d", "e", "f"]
combinedList = [...listC1, ...listC2]

console.log(combinedList) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


console.log("Example D")
// spread operators can be used to make copies of structs/objects. 

let personD1 = {
  firstName: "John",
  lastName: "Brown",
  age: 23,
  eyeColor: "green"
}



let personD2 = { ...personD1 }

personD2.age = 10


console.log(personD1) // { firstName: 'John', lastName: 'Brown', age: 23, eyeColor: 'green' }

console.log(personD2) // { firstName: 'John', lastName: 'Brown', age: 10, eyeColor: 'green' }

