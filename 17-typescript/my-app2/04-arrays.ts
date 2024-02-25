let stringArray1: string[] = ['a', 'b', 'c']
console.log(stringArray1[0])
console.log(stringArray1[1])
console.log(stringArray1[2])
console.log(stringArray1)


// you can declare an array using the generics syntax
let stringArray2: Array<string> = ['e', 'f', 'g']
console.log(stringArray2[0])
console.log(stringArray2[1])
console.log(stringArray2[2])
console.log(stringArray2)

// Using "any" isn't recommended, but can be used.
let stringArray3: any = ['h', 4, true]
console.log(stringArray3[0])
console.log(stringArray3[1])
console.log(stringArray3[2])
console.log(stringArray3)


// tsc 04-arrays.ts ; node 04-arrays.js