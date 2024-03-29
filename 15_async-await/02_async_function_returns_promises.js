'use strict'


async function doSomeWork(){
	return "hello"
} 


// An "async" function's return statement ALWAYS returns the value (e.g. string value) wrapped inside a promise. 
let myPromise = doSomeWork()

console.log(typeof myPromise) // object - of the type promise - https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise

myPromise.then(val => {console.log(val)})

