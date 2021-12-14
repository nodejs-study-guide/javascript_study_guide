'use script'

// Normally a node script exits when it runs out of code to run. 

// However you can also use process to exit - https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program


// here we have added a listener to the exit event, that gets triggerted when the process.exit() statement gets triggered. 
process.on("exit", () =>  {
	console.log("exiting script now")
})

// here we do a successful exit (exit code of 0).  
process.exit(0)
// this is equivalent to bash's "exit 0"