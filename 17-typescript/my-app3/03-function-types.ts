// tsc 03-function-types.ts ; node 03-function-types.js


// This syntax says that the `greetings03` variable can store a function that has one input paramter, of type string, and one 
// output parameter of type string.  
let greetings03: (name: string) => string 


greetings03 = (name03: string): string => {
  return `hello ${name03}`
}

let msg = greetings03("Tom")

console.log(msg)