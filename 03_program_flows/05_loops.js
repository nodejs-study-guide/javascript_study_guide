console.log("Example A")
// simple for-loop 
for (let i = 0; i < 3; i++) {
	console.log(i)
}

console.log("Example B")
// simple while-loop 
let countB = 0
while (countB < 3) {
	console.log(countB)
	countB++
}



console.log("Example C")
// simple do-while-loop 
let countC = 0
do {
	console.log(countC)
	countC++
} while (countC < 3) 

// Main difference between while and do-while loops is that do-while loop gaurantees that code block runs at least once. 
// Whereas while-loop will only run if condition is met.





console.log("Example D")
// Here's an example of a FOR-IN loop that's used to iterate through all of an object's key-value properties.

let personD = {
	firstName: "John",
	lastName: "Smith",
	age: "30",
} 

for (myKey in personD){
	console.log(myKey + " is equal to " + personD[myKey])
}

// this outputs:

// firstName is equal to John
// lastName is equal to Smith
// age is equal to 30



console.log("Example E")
// Here's an example of a FOR-OF loop.  This is useful for iterating through an array


let PeopleE = [
	{
	firstName: "John",
	lastName: "Smith",
	age: "30",
}, 
{
	firstName: "David",
	lastName: "Jones",
	age: "34",
}, 
{
	firstName: "Alex",
	lastName: "Ander",
	age: "25",
}, 
]

for (item of PeopleE){
	console.log(JSON.stringify(item))
}

// This outputs:

// {"firstName":"John","lastName":"Smith","age":"30"}
// {"firstName":"David","lastName":"Jones","age":"34"}
// {"firstName":"Alex","lastName":"Ander","age":"25"}


console.log("Example F")
// FOR-OF loop can also iterate over a string!


let PersonF = "David"

for (item of PersonF){
	console.log(item)
}

// output is:

// D
// a
// v
// i
// d





console.log("Example G")
// Here's an example of the "break" statement 
for (let i = 0; i < 8; i++) {

	if (i === 3){
	console.log("reach the target number of 3, exiting loop now")
		break
	}
	console.log(i)
}


console.log("Example H")
// Here's an example of the "break" statement 
for (let i = 0; i < 8; i++) {

	if (i === 3){
	console.log("Don't like 3, so skipping it")
		continue
	}
	console.log(i)
}