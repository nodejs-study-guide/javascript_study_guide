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