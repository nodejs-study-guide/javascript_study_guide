// You can create several object (of the same structure) like this:

let person1 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 23,
  eyeColor: 'brown',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person1)

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 45,
  eyeColor: 'brown',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person2)


let person3 = {
  firstName: 'Mike',
  lastName: 'Greenwood',
  age: 35,
  eyeColor: 'blue',
  greetings: function(){return 'hello ' + this.firstName + ' ' + this.lastName}
}

console.log(person3)









// This is very repetive, and hard to maintain if you have 100s of objects. Hence better to you use a constructor like this instead:

// notice there's no return statement 
function person (firstName, lastName, age, eyeColor){
  this.firstName= firstName
  this.lastName= lastName
  this.age= age
  this.eyeColor= eyeColor
  this.greetings= function(salute){return salute + ' ' + this.firstName + ' ' + this.lastName} 
}

// The "new" keyword captures the object stored inside "this" 
let person4 = new person('John','Smith',23,'brown')

console.log(person4)
let message = person4.greetings('hi')
console.log(message)

