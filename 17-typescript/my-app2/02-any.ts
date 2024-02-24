// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

// Also vs code won't show any errors. either. 
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// That's why you should avoid creating variables of the type "any"