"use strict";
let name1 = "Tom";
console.log(`hello ${name1}`);
function greet02b(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet02b("David", new Date());
