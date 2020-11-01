function greetings(name = "World"){
  console.log("Hello " + name)
}

greetings()        // Hello World
greetings('John')  // Hello John


// Here's another example
function greetings1(message, name = "World"){
  console.log(message + " " + name)
}

greetings1('Hello')        // Hello World
greetings1('hi', 'John')  // Hello John
