


function printAndRespond (message, delay) {
    let apiResponse = function() {
      console.log('Message is : ' + message)
    }
    setTimeout(apiResponse, delay)
}
console.log('starting')
printAndRespond('first do 1', 5000)
printAndRespond('then do 2', 1000)
printAndRespond('then do 3', 1000)
console.log('finished')

/*
In this example we, used the builtin setTimeout() function
as a way to mimic api responses, which can be slow 
due to network speed issues. 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

setTimeout() requires 2 input parameters,
 1. first parameter specifies what function to run, and the
 2. second parameter sets how how many milliseconds to wait before running the function. 


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


function printAndRespond (message, delay, callback) {
  console.log('Message is: ' + message)
  setTimeout(callback, delay)
}
console.log('starting')
printAndRespond('first do 1', 5000, () => {
  printAndRespond('then do 2', 1000, () => {
    printAndRespond('then do 3', 1000, () => {})
  })
})
console.log('finished')


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


