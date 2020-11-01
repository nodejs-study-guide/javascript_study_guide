/*
This is similar to the call method, but in apply(), the functions parameters are 
passed in using an array. 
*/

function intro(name, profession){
  console.log('My name is ' + name + ' and I am a ' + profession);
  console.log(this);
}

intro('John','student');
\\ My name is John and I am a student
\\ :[object Window]

\\ we don't want to pass in 'this' so used 'undefined'
intro.call(undefined, 'Mary','Lawyer');
\\ My name is Mary and I am a Lawyer
\\ :[object Window]

\\ we don't want to pass in 'this' so used 'undefined'
intro.apply(undefined, ['David','plumber']);
\\ My name is David and I am a plumber
\\ :[object Window]
