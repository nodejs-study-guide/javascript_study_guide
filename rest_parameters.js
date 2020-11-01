// Rest Parameters are the same thing as golang's variadic function. It even uses the same dotdotdot notation, "..."

let greetings = function greet(...names){
  names.forEach(name => console.log('Hi ' + name));
}

greetings('Mary', 'John', 'James')
// Hi Mary
// Hi John
// Hi James
