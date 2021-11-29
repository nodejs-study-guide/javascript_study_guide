'use strict'

// What is a callback?
// A callback is a function passed as an argument to another function.


// Javascript is asynchronous by default.

const fs = require('fs')
const path = require('path')

console.log(__dirname)      // /Users/sherchowdhury/github/javascript_study_guide/13_asynchronous_programming
console.log(process.cwd())  // /Users/sherchowdhury/github/javascript_study_guide


const pathToFile = path.join(__dirname, 'hello.txt')  

console.log(pathToFile)   // /Users/sherchowdhury/github/javascript_study_guide/13_asynchronous_programming/hello.txt

// the following spawns a secondary thread, and reads file until the 
// values of "err" and "content" is determined and loaded into memory (this memory is shared between all threads).
// readFile then adds the arrow function to the eventloop queue, and then the secondary thread exits.  
// the primary thread then executes the arrow function
fs.readFile(pathToFile, 'utf8', (err, content) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(content)
})

console.log("goodbye") // this get's printed first. 


// You can think of callback functions as the "next" function to run, once the parent function finishes,
// where the parent function's outputs can be passed into the next function's inputs. 


// note, you can't use try...catch syntax to catch an error being return from a callback function. That's because
// try...catch only works for catchng errors originating from synchronous code. Whereas callbacks by design runs 
// asynchronously since it involved putting the call back functions on the eventloop queue.  
