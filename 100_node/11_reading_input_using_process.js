'use strict'

// you can read input from using a script, to make the node script more interactive 

process.stdin.on('readable', () => {
	const chunk = process.stdin.read()
	if (chunk !== null){
		process.stdout.write(chunk)
		console.log(chunk)             // This prints something like: <Buffer 6c 6b 6a 6c 6a 6b 6c 0a>
	}
})


// Instead of using the "process.stdin.on" here's an alternative way of doing this using pipe. 
process.stdin.pipe(process.stdout)