// tsc 02-function-overloads.ts ; node 02-function-overloads.js
// the above 2 are signatures, now we use the following to definition to define both of these functions,
// we have to use the "?" here so that it is compatible for both of the above definitions. 
function greetings(firstname, id) {
    console.log("hello ".concat(firstname, ", your id is ").concat(id));
    return "welcome to the Avengers";
}
var message3 = greetings("Tony Stark", 7);
console.log(message3);
// I'm not sure what benefits function overloading offers yet. 
