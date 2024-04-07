"use strict";
// Notice that no errors shows here, that's because typescript is smart enough to work out the type for you, i.e. this is the implicit approach. 
let name1 = "Tom";
console.log(`hello ${name1}`);
// 
// https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness
//
function greet02b(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet02b("David", new Date());
