// tsc 01-interfaces.ts ; node 01-interfaces.js

// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces

// interfaces is a composite datatype, similar to golang's struct. Interfaces is one of the most 
// useful features of typescript. 

interface Person {
  firstName: string
  lastName: string
  walk: (distance: number) => string 
  faveBook?: string,                      // this is optional
  farewell: Goodbye
}

// notice the slightly different syntax here.
// here the input parameter signature acts as the property/key, and 
//the output parameter signature acts as the value.
interface Goodbye {
  (name: string): void
}



function greetings(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName
}

function humanWalk(distance: number): string {
  return `Human has walked ${distance} in a straight line`
}

let user1: Person = { 
  firstName: "Jane", 
  lastName: "Doe",
  walk: humanWalk,
  farewell: (name: string): void => console.log(`goodbye ${name}`)
}


// The following also works, even though we don't explicitly set this as a "Person" type, 
// and also has a third key, called "age". The greetings function will accept this since it has keys called "firstName", "lastName"
// and "walk", and they are all of the right stypes
// This concept is called "duck typing", i.e. it looks like a duck, walks like a duck, and sounds like a duck, so probably is a duck. 
// This is a bit of a loose mechanism, which I don't like. 
// also faveBook is optional so we don't need to set it here. 
let user2 = { 
  firstName: "Donald", 
  lastName: "Duck",
  age: 23,
  walk: (distance: number): string => `duck walks ${distance} in a straight line.`,
  farewell: (name: string): void => console.log(`goodbye ${name}`)
}

let msg1 = greetings(user1)
let msg2 = greetings(user2)


console.log(msg1)
console.log(msg2)

console.log(user1.walk(10))
console.log(user1.walk(5))

user1.farewell("jane")
user2.farewell("donald")