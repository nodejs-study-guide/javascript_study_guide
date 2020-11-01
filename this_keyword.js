
// "this" is a builtin object is used for accessing something that already exists in the current. 
// object, which in this case is "person"
let person = {
  title: 'Mr',
  firstName: 'John',
  lastName: 'Smith',
  age: 38,
  greetings: function() {
    return 'Hello my name is ' + this.firstName + ' ' + this.lastName
    }, 
}

console.log(person.greetings())  // Hello my name is John Smith





// arrow-function equivalent
let person = {
  title: 'Mr',
  firstName: 'John',
  lastName: 'Smith',
  age: 38,
  greetings: function() {
    return 'Hello my name is ' + this.firstName + ' ' + this.lastName
    }, 
  getThis: function() {
    return this;
  }
}

console.log(person.greetings()) // Hello my name is John Smith

console.log(person.getThis())
/*
{
  title:"Mr",
  firstName:"John",
  lastName:"Smith",
  age:38,
  greetings:f greetings {...},
  getThis:f getThis {...}
}
*/


// Just running this on it's own
// gives you the global windows object:

console.log(this)  // [object Window]

// The same thing happens here too:

function greetings() {
  console.log(this)  
}
greetings() // [object Window]

// That's because being inside a function doesn't mean it's inside an object




// when it is inside an object (i.e. struct) then it starts working:

message = {
  
  var1: function greetings() {
          console.log(this)    
        },
};

message.var1()
/*
{
  var1:f greetings {...}
}
*/

