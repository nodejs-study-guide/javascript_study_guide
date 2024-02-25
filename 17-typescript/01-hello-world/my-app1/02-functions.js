// https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types
function greet02a(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet02a("David", new Date());
// npx tsc 02-functions.ts
// node 02-functions.js
// if you look at the corresponding .js file, you'll see that 
// it's syntax is for a quite an old version of javascript ECMAScript, to ensure better compatibility for older web browser versions. 
// to target a newer javascript version, then use the "target" flag:
// npx tsc --target es2015 02-functions.ts 
