'use strict'

console.log("EXAMPLE A")
// destructuring example

// The destructuring assignment syntax is a JavaScript expression that makes it possible to 
// unpack values from arrays, or properties from objects, into distinct variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



let a, b, rest
[a, b, ...rest] = [10, 20, 30, 40, 50]
// the above array's items get captured to the variables 'a' and 'b'. The 3 dot notation, in '...rest', is used to capture the rest of the items in the array.

console.log(a) // 10
console.log(b) // 20

console.log(rest) // [30, 40, 50]



console.log("EXAMPLE B")

// Here's a handy shorthand technique, instead of:

// const PI = Math.PI
// const E = Math.E
// const SQRT2 = Math.SQRT2

// we can using this destructure technique to write the above 3 lines into a single line:

const { PI, E, SQRT2 } = Math

// this destructure method is often used for importing resources from node packages, e.g. 
// xxxxxxx


// This is a handy technique for extracting some properties from a bigger object. 

// This technique also works pulling out particular methods out of a module, e.g. 
// If we're only interested in the fs.readFile() method, then instead of:

// const fs = require('fs')
// let content = fs.readfile(/path/to/file)

// we can do:

// const { readFile } = require('fs')
// let content = readfile(/path/to/file)


// Destructuring also works inside functions. 
console.log("EXAMPLE C")

// notice the curly braces around the function's input parameters. This means 
function circleArea({radius}){
	if (typeof radius !== 'number'){
		return "passed in object doesn't have a radius property"
	}
	return radius * radius * 3.141
}

// The above function input parameter means, that this function accepts any object that contains
// and keyName=Value pair, where the keyName is equal to "radius"

let myCircle = {
	diameter: 4,
	colour: "green",
	radius:  2
}

console.log(circleArea(myCircle))

let mySquare = {
	length: 4,
	width:  2
}

console.log(circleArea(mySquare)) // passed in object doesn't have a radius property




