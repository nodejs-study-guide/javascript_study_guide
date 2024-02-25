// tsc 02-extend-interfaces.ts ; node 02-extend-interfaces.js
function greetings(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
function humanWalk(distance) {
    return "Human has walked ".concat(distance, " in a straight line");
}
var user1 = {
    firstName: "Jane",
    lastName: "Doe",
    walk: humanWalk,
    farewell: function (name) { return console.log("goodbye ".concat(name)); }
};
// The following also works, even though we don't explicitly set this as a "Person" type, 
// and also has a third key, called "age". The greetings function will accept this since it has keys called "firstName", "lastName"
// and "walk", and they are all of the right stypes
// This concept is called "duck typing", i.e. it looks like a duck, walks like a duck, and sounds like a duck, so probably is a duck. 
// This is a bit of a loose mechanism, which I don't like. 
// also faveBook is optional so we don't need to set it here. 
var user2 = {
    firstName: "Donald",
    lastName: "Duck",
    age: 23,
    walk: function (distance) { return "duck walks ".concat(distance, " in a straight line."); },
    farewell: function (name) { return console.log("goodbye ".concat(name)); }
};
var msg1 = greetings(user1);
var msg2 = greetings(user2);
console.log(msg1);
console.log(msg2);
console.log(user1.walk(10));
console.log(user1.walk(5));
user1.farewell("jane");
user2.farewell("donald");
