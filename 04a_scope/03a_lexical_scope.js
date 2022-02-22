'use strict'

let msg = "hi"

// javascript uses "lexical scoping", meaning, when a function executes, it only uses variables that
// has existed at the time of the function's definition...
function greetings(){
	console.log(msg)
}

greetings() // hi

/// .... and it ignores any other variables at the time of it's execution.
{
let msg = "hello" // this get's ignored by greetings() because it's not in the same variable scope

greetings() // hi

}

msg = "hello world"
greetings() // hello world