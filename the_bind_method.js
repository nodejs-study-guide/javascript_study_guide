/*
Let's say we have to objects (structs), person1 and person2. 
One of person1's property is a function (aka method), however person2 doesn't have 
this property+function (aka method).

However you can still apply this person1's method to person2 using the "bind()" builtin function
*/

let person1 = {
  name: 'Mary',
  getName: function(){
    return this.name;
  },
}

let person2 = {
  name: 'John',
}

// getNameCopy is a function, with the info of person2 details pre-injected in
// in the form of a "this" object
let getNameCopy = person1.getName.bind(person2) ;


console.log(getNameCopy()); // John
