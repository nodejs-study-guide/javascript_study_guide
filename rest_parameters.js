// Rest Parameters are the same thing as golang's variadic function. It even uses the same dotdotdot notation, "..."

let greetings = function greet(...names){
  names.forEach(name => console.log('Hi ' + name));
}

greetings('Mary', 'John', 'James')
// Hi Mary
// Hi John
// Hi James


// Rest Parameters are the same thing as golang's variadic function. It even uses the same dotdotdot notation, "..."

let greetings = function greet(message, ...names){
  names.forEach(name => console.log(message + ' ' + name));
}

greetings('Welcome', 'Mary', 'John', 'James')
// Welcome Mary
// Welcome John
// Welcome James
