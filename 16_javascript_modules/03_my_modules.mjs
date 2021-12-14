'use strict'

function myPrivateFunction1(){
	console.log("goodbye world")
}


function myPublicFunction1(){
	console.log("hello world")
	myPrivateFunction1()
}

// another way to export is to add an export line at the bottom of your module file,
// and then list out what to export,
// export {function1, function, ...ect}
export { myPublicFunction1}

