'use strict'


async function doSomeWork(){
	return "hello"
} 


// An "async" function's return statement always returns the value (e.g. string value) wrapped inside a promise. 
let myPromise = doSomeWork()

console.log(typeof myPromise) // object - https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise

myPromise.then(val => {console.log(val)})

