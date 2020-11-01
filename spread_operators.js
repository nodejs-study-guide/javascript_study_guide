// spread operators spreads expands an array into individual arguments before 
// feeding it into a function. It's kind of like how a "rest parameter" works 
// but in reverse. 

function greet(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2 );
}

let names = ['John', 'Mary'];

// notice we pass in '...' which kinda explodes the array into individual 
// comma seperated arguments before feeding them into the 'greet' function. 
greet(...names); // Hello John and Mary


// It can also split a string variable too. 
function greet(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2 );
}

let letters = 'ab';
greet(...letters); // Hello a and b
