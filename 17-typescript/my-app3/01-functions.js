// Here's how to add type annotations to a function's input parameters and output paramters
function greetings3a(name, id) {
    console.log("hello ".concat(name, ", your id is ").concat(id));
    return "welcome to the Avengers";
}
var message = greetings3a("Tony Stark", 7);
console.log(message);
// You can make a parameter optional using "?" character. 
// when this happens "id" gets set to "undefined" by default. 
function greetings3b(name, id) {
    console.log("hello ".concat(name, ", your id is ").concat(id));
    return "welcome to the Avengers";
}
var message1 = greetings3b("Tony Stark");
console.log(message1);
// You can assign a default value to an input parameter. 
// Assigning a default value also makes the parameter optional too, so you don't need to add in the "?" notation as well.  
function greetings3c(name, id) {
    if (id === void 0) { id = 5; }
    console.log("hello ".concat(name, ", your id is ").concat(id));
    return "welcome to the Avengers";
}
var message2 = greetings3c("Peter Parker");
console.log(message2);
message2 = greetings3c("Doctor Strange", 10);
// Here's an example of rest parameters (elipsis notation)
var greetingsA = function greet(salutations) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    names.forEach(function (name) { return console.log("".concat(salutations, " ").concat(name)); });
};
greetingsA('Hello', 'Mary', 'John', 'James');
// Here's a regular function which I'll convert into an arrow function
function logMessage(message) {
    console.log(message);
}
logMessage("log: this is a regular function");
// The above function can be rewritten as an arrow function:
var logMessage1 = function (message) {
    console.log(message);
};
logMessage1("log: this is an arrow function");
// tsc 01-functions.ts ; node 01-functions.js
