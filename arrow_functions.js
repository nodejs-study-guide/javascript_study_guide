// A regular function

let greetings = function() {
  return 'Hello World';
};

let message = greetings();
console.log(message);      // Hello World



// arrow function equivalent (just the first line is different)
let greetings = () => {
  return 'Hello World';
};

let message = greetings();
console.log(message);      // Hello World
