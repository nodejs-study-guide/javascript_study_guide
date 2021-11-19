'use strict'

let varA = 10

if ("10" == varA){
	console.log("varA is equal to 10")   // this get's executed.  
} else {
	console.log("varA is NOT equal to 10")
}


// The above is satisfied by a simple value comparison. It resolves to true, even thought varA is not a string variable. 
// that's because javascript will first attempt to convert to matching types, before performing the comparison. 


// To do a stricter check, that checks that both the value, and data type matches, we use the 
// triple-equal operator:

if ("10" === varA){
	console.log("varA is equal to 10")   
} else {
	console.log("varA is NOT equal to 10")   // this get's executed.  
}


// Now it is a strict match. 
if (10 === varA){
	console.log("varA is equal to 10")   // this get's executed.  
} else {
	console.log("varA is NOT equal to 10")   
}

// Note, for Not-equal check, we use "!==" instead.


let debugEnabled = true
if (debugEnabled){
	console.log("Debug is enabled")   // this get's executed.  
} else {
	console.log("Debug is disenabled")   
}



// curly-braces are optional if the "if" part of the if statement only contains 1 line of code. Even so, it's always best to 
// include curly braces all the time, for readability purposes. 
if (true)
	console.log("curly braces are optonal, as long as block of code is a single line")     // this get's executed.
else 
	console.log("doesn't get executed") 