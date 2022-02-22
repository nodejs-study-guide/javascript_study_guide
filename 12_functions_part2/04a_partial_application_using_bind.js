'use strict'
/*

The bind() can also be used to provide hard-code arguments for input paramters, which cannot be chnaged.
*/


let person1 = {
  name: 'Mary',
  getName: function(age){
    return this.name + ' is ' + age
  },
}


let person2 = {
  name: 'John',
}


// Here we're hard-coding the age to 25.
let result =  person1.getName.bind(person2, 25)

console.log(   result()   ) // John is 25

// We try to pass in an argument of 30, but that get's ignored.
console.log(   result(30)   ) // John is 25

// this techniqe is alson known as "currying".


// binding also works with ordinary functions:



function getName(age){
  return this.name + ' is ' + age
}

let result1 =  person1.getName.bind(person2)

console.log(   result1(40)   )