// tsc 01-functions.ts ; node 01-functions.js


// Here's how to add type annotations to a function's input parameters and output paramters
function greetings3a(name: string, id: number): string {
  console.log(`hello ${name}, your id is ${id}`)
  return "welcome to the Avengers"
}

const message: string = greetings3a("Tony Stark", 7)

console.log(message)


// You can make a parameter optional using "?" character. 
// when this happens "id" gets set to "undefined" by default. 
function greetings3b(name: string, id?: number): string {
  console.log(`hello ${name}, your id is ${id}`)
  return "welcome to the Avengers"
}

const message1: string = greetings3b("Tony Stark")

console.log(message1)



// You can assign a default value to an input parameter. 
// Assigning a default value also makes the parameter optional too, so you don't need to add in the "?" notation as well.  
function greetings3c(name: string, id: number = 5): string {
  console.log(`hello ${name}, your id is ${id}`)
  return "welcome to the Avengers"
}

let message2: string = greetings3c("Peter Parker")

console.log(message2)

message2 = greetings3c("Doctor Strange", 10)



// Here's an example of rest parameters (elipsis notation)
let greetingsA = function greet(salutations: string, ...names: string[]) {
  names.forEach(
      name => console.log(`${salutations} ${name}`)
  )
}

greetingsA('Hello', 'Mary', 'John', 'James')



// Here's a regular function which I'll convert into an arrow function


function logMessage(message: string): void {
  console.log(message)

}
logMessage("log: this is a regular function")


// The above function can be rewritten as an arrow function:
const logMessage1 = (message: string): void => {
  console.log(message)
}
logMessage1("log: this is an arrow function")

