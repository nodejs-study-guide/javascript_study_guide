'use strict'




let car1 = new Promise(resolve => {
		setTimeout(val => {resolve(val)}, 1000, "Car 1")
	}
)

// these 2 lines are same as above, but in more shorthand form
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2."))
let car3 = new Promise(resolve => setTimeout(resolve, 5000, "Car 3."))

// we'ves set one to fail too. 
let car4 = new Promise((_, reject) => setTimeout(reject, 10000, "Car 4."))

// the resolve-value of which ever promise that get's resolved (or rejected) first will be used in this .then block. 
// the other promises get ignored here, however once the .then block completes, the promis.race will hang
// until the other promises finishes. 
Promise.race([car1, car2, car3, car4])
.then(value => {
	console.log("Promise Resolved", value);
})
.catch(err => {
	console.error("Promise rejected", err);
})


// this promisce race feature can be used for setting up a timeout feature 