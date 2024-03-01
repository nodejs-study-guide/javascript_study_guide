// tsc 03-extend-interfaces.ts ; node 03-extend-interfaces.js
var user4 = {
    name: "human",
    warmBlooded: true,
    extinct: false,
    id: 1,
    firstName: "John",
    lastName: "Smith",
};
var duck4 = {
    name: "human",
    warmBlooded: true,
    extinct: false,
    id: 1,
    wingspan: 140,
    breed: 'Pekin'
};
function greetings03(person) {
    console.log("hello ".concat(person.name));
}
function getWingspan(duck) {
    console.log("The wingspan is ".concat(duck.wingspan));
}
greetings03(user4);
getWingspan(duck4);
