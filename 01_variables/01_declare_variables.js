

// variables are declare using the "let" keyword

// EXAMPLE A
let greetingsA = "helloA"
console.log(greetingsA)

let ageA = 25
console.log(ageA)

let priceA = 45.99
console.log(priceA)

let marriedA = true
console.log(marriedA)


// javascript works out a variable data type automatically for us. We can see this using the "typeof" operator:
console.log(typeof greetingsA)
console.log(typeof ageA)
console.log(typeof priceA)
console.log(typeof marriedA)

// for more info about "typeof", see: https://www.w3schools.com/jsref/jsref_operators.asp


// EXAMPLE B
// you can use "let" keyword to declare mulptiple variables, with comma acting as a delimiter. 
let greetingsB = "helloB", 
	ageB = 25, 
	priceB = 45.99, 
	marriedB = true

console.log(greetingsB)
console.log(ageB)
console.log(priceB)
console.log(marriedB)


/* 

Variables names must start with one of the folllowing:

- _
- $
- letter

Note, a variable name cant start with a letter. 

Variable names cannot be a key word. E.g. you can't declare a variable called "let"

Some javascript conventions:
- is camelcase Style. 
- variables starting with "_" is used to indicate a private variable. 
- It's recommended to avoid starting a variable with the "$" character

*/



// EXAMPLE C
// Here's a quick example of operators. 
console.log("EXAMPLE C")
let priceC = 20
console.log(priceC)   // 20
priceC = priceC + 1
console.log(priceC)   // 21
priceC += 5           // short-hand way of writing:    priceC = priceC + 5 
console.log(priceC)   // 26

console.log(priceC++) // 26        prints out the value, then increment it by 1
console.log(priceC)   // 27


console.log(++priceC) // 28   increment by 1, before printing it out. 
console.log(priceC)   // 28
