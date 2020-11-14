


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

So the next thing we're going to do is reduce/eliminate all this nesting. And to do that by using "Promises". 



A promise is a javascript builtin object. It comes with two methods "resolve" and "reject". 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve


When instantiating a "Promise" object, you have to pass in a function, which in turn can accept 2 input parameters. 


let myResolve = function() {
  return 'Hello World'
}

let myReject = function() {
  return 'Hello World'
}

let inputFunction = function() {
  return 'Hello World'
}

let myPromise = new Promise(inputFunction)




*/





