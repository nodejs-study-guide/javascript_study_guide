console.log("EXAMPLE A")
// "this" is a builtin object is used for accessing something that already exists in the current
// object, which in this case is "personA"
let personA = {
  title: 'Mr',
  firstName: 'John',
  lastName: 'Smith',
  greetings: function () {
    return 'Hello my name is ' + this.firstName + ' ' + this.lastName
  },
  getAge: function (age) {
    return 'I am ' + age + ' years old'
  },
}

console.log(personA.greetings())  // Hello my name is John Smith
console.log(personA.getAge(34))   // I am 34 years old


// Methods are actually a type of function:
console.log(typeof personA.getAge)    // function

// that's associated to an object. so to call that method you have to use 
// objectName.MethodName() syntax. 


console.log("EXAMPLE B")
// arrow-function equivalent
let personB = {
  title: 'Mr',
  firstName: 'John',
  lastName: 'Smith',
  age: 38,
  greetings: function () {
    return 'Hello my name is ' + this.firstName + ' ' + this.lastName
  },
  getThis: function () {
    return this;
  }
}

console.log(personB.greetings()) // Hello my name is John Smith

console.log(personB.getThis())
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

