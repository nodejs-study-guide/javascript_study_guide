// tsc 03-function-types.ts ; node 03-function-types.js
// This syntax says that the `greetings03` variable can store a function has one input paramter, of type string, and one 
// output parameter of type string.  
var greetings03;
greetings03 = function (name03) {
    return "hello ".concat(name03);
};
var msg = greetings03("Tom");
console.log(msg);
