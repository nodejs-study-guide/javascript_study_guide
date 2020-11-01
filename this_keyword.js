
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
