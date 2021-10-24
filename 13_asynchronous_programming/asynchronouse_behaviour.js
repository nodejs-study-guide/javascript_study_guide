'use strict'
// javascript by default is asynchronous. 
// meaning that a script is run in sequence, but
// javascript won't stop for each line to complete running before moving on
// to the next line. 
// bash scripting on the other hand is synchronous by default. I.e. bash will wait for each line to complete before moving to the 
// next line. 

console.log("Example A")
function printAndRespond (message, delay) {
    let apiResponse = function() {
      console.log('Message is : ' + message)
    }
    // we're using the builtin setTimeout() function to mimic a slow api response - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
    // setTimeout() requires 2 input parameters,
    // 1. first parameter specifies what function to run, and the
    // 2. second parameter sets how how many milliseconds to wait before running the function. 
    setTimeout(apiResponse, delay)
    console.log('Message is : 4')
}
console.log('starting')
printAndRespond('first do 1', 5000)
printAndRespond('then do 2', 1000)
printAndRespond('then do 3', 1000)
console.log('finished')





/*



The above outputs:

// starting
// finished
// Message is : then do 2
// Message is : then do 3
// Message is : first do 1

The ordering looks wrong here. 



This is because all javascript operations (e.g. setTimout), are asynchronous operations in JavaScript. 
i.e. javascript will not wait for the request to complete. Rather, it will continue on its way. 

Javascript is designed to run code asynchronously in order to run as fast as possible. 


So how do we fix it, and make things run more sequentially?


One option is to set up callbacks, and nested arrow functions

*/


// console.log("Example B")
// function printAndRespondB (message, delay) {
//     let apiResponse = function(message) {
//       console.log('Message is : ' + message)
//     }
//     // we're using the builtin setTimeout() function to mimic a slow api response - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
//     // setTimeout() requires 2 input parameters,
//     // 1. first parameter specifies what function to run, and the
//     // 2. second parameter sets how how many milliseconds to wait before running the function. 
//     setTimeout(apiResponse(message), delay)
    
// }
// console.log('starting')
// console.log(printAndRespondB('first do 1', 5000))
// console.log(printAndRespondB('then do 2', 1000))
// console.log(printAndRespondB('then do 3', 1000))
// console.log('finished')





// function printAndRespond (message, delay, callback) {
//   console.log('Message is: ' + message)
//   setTimeout(callback, delay)
// }
// console.log('starting')
// printAndRespond('first do 1', 5000, () => {
//   printAndRespond('then do 2', 1000, () => {
//     printAndRespond('then do 3', 1000, () => {})
//   })
// })
// console.log('finished')


/*
This outputs:

// starting
// Message is: first do 1
// finished
// Message is: then do 2   // this dispalays afer 5 seconds
// Message is: then do 3

The ordering has improved, but still not 100% correct. 
Also the nesting of code is ugly and hard to read.

So the next thing we're going to do is reduce/eliminate all this nesting. And to do that by using "Promises". 
*/


