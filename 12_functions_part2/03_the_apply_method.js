/*
This is similar to the call method, but in apply(), the functions parameters are 
passed in using an array. 
*/

function intro(name, profession){
  console.log('My name is ' + name + ' and I am a ' + profession)
  // console.log(this);
}

console.log("EXAMPLE A")

intro('John','student')
// My name is John and I am a student
// :[object Window]


console.log("EXAMPLE B")

// However if your arguments are stored in list:

person1 = ['Tom','Accountant']
console.log(person1)          // [ 'John', 'student' ]

// Then trying to pass in the list, doesn't quite work as hoped:
intro(person1) // My name is Tom,Accountant and I am a undefined

console.log("EXAMPLE C")
// Instead you use the apply method:
intro.apply(undefined, person1)
// The first parameter is to set the value of "this", so we've left that to undefined. 
// The second parameter has to be an array of arguments. 

console.log("EXAMPLE D")
// You can also achieve the same result using the 3 dot ellipsis, to expand the array:
intro.call(undefined, ...person1)

// As you can see, apply() is very similar to cal(), the only difference between them is that 
// apply() can accept an array that contains all the arguments, whereas call() can only 
// accept them as separate arguments, but if you have an array, then theres a simple 
// workaround, which is to "...".  

// So apply() and call() ultimately gives the same end result, but each in their own slightly 
// different way. However call() does appear to be the more versatile of the 2, since it's easy
// to auto-expand an array using "...", whereas with an apply(), you have to construct an array,
// if one isn't ready available to you. 


