'use strict'



console.log("EXAMPLE B")
// rewrite of the previous example:



setTimeout(() => {
	console.log("Welcome")
	setTimeout(() => {
		console.log("to")
		setTimeout(() => {
			console.log("the")
			setTimeout(() => {
				console.log("Jungle")
			}, 2000)
		}, 100)
	}, 3000)
}, 2000)


// This has a lot of nesting, hence the name callback hell. 

// this is a bit like an onion. on the first cycle the entire arrow function is 
// added to the event loop, after 2 seconds passes. 
// then the main thread executes it (takes one layer off) and then puts the remaining 
// arrow function into the eventloop after 3 seconds. ...etc. 

// This approach only forces synchronous at the high level block level. The code still runs 
// asyncrhonously within each block scope. 

// In other words, the above set up only controls when each function starts to run. It doesn't enforce any 
// controls that prevents a function from starting before the parent function ends. So in theory it is
// possible that all functions are running at the same time, and also the child functions can end before the 
// parent function ends. 



