'use strict'

// you can call a function before defining the function! This concept is called "hoisting". that's because the javascript,
// does a 2-pass of the code. In the first pass it gathers just the functions and load them in. then it does the second 
// pass to actually run the code while all the function are loaded in memory.

// As a result the following works:


greetingsA()

function greetingsA(){
	console.log("hello world")
}



// The same thing happens to variables too, if you created using the variable using the 'var' key word. That's why it's best 
// to use the 'let' key word to keep things sequential.