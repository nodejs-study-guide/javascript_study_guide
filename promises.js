


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
In this example we, used teh builtin setTimeout() function
as a way to mimic api responses, which can be slow 
due to network speed issues. 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
The first parameter specifies what function to run, and the
second parameter sets how how many milliseconds to wait before
running the function. 


The above outputs:

// starting
// finished
// Message is : then do 2
// Message is : then do 3
// Message is : first do 1

The ordering looks wrong here. 

So how do we fix it?


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
*/




