'use strict'

// the previous example can be rewritten like this:

// callback function
function next(var1, var2) {
	console.log(var1, var2)
}
// here's another weird looking shorthand syntax you can use with setTimeout method. 
setTimeout(next, 2000, "hello", "world")


