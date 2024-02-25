// tsc 02-function-overloads.ts ; node 02-function-overloads.js


// You can have multiple functions of the same, so long as they have different parameter signatures
function greetings(name: string): string 
function greetings(name: string, id: number): string 

// the above 2 are signatures, now we use the following to definition to define both of these functions,
// we have to use the "?" here so that it is compatible for both of the above definitions. 
function greetings(firstname: string, id?: number): string {
  console.log(`hello ${firstname}, your id is ${id}`)
  return "welcome to the Avengers"
}

const message3: string = greetings("Tony Stark", 7)

console.log(message3)

// I'm not sure what benefits function overloading offers yet. 
