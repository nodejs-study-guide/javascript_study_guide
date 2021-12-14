'use strict'

function myPrivateFunction(){
	console.log("goodbye world")
}


export function myPublicFunction(){
	console.log("hello world")
	myPrivateFunction()
}