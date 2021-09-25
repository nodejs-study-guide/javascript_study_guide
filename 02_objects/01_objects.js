// An object can be a user-defined composite datatype. 

// Objects's are Golang's equivalent of "structs", i.e. a group of key-value stored inside a variable.
// Each key-value entry is referred to either as a "property" (if value stores some data) or "method" (if value stores a function)

// this object has 2 properties (name and age), and 2 methods (greetings and farewell)



console.log("Example A")
person = {
	name: 'John',
	age: 32,
	greetings: function(){return `hello ${this.name}`},
	farewell: function(){return "goodbye " + this.name }
}


console.log(typeof person)   // object

console.log(person.name)            // John
console.log(person.age)             // 32
console.log(person.greetings())     // hello John
console.log(person.farewell())      // goodbye John

// accessing a non-existient property
console.log(person.gender)          // undefined     // noticed script doesn't fail. 




console.log("Example B")
// Alternative syntax for accessing properperties:
console.log(person['name'])            // John
console.log(person['age'])             // 32



console.log("Example C")
// symbol is a special data type user for storing sensitive data. 
let mySymbol = Symbol()
employee = {
	name: 'John',
	age: 32,
	[mySymbol]:  'secret data, e.g. a password' 
}
// The only code that can access the secret data, is code that has access to the mySymbol variable. 