/*
A promise is a javascript builtin object. 

Promises let's you run 2 functions in order, so that the second function only starts running after the 1st function has finished running. 

For the second function slot, you have to provide 2 functions (a "success" function, and a "fail" function). The success-function runs if the first function executes 
successfully. otherwise the fail-function executes. 


It looks like something like:

let myPromise = new Promise(myCallback)
myPromise.then(success,fail)

Here "myCallback" is the first function, whereas the 2 second slot functions are occupied by the "success" and "fail" functions.  


The myCallback function needs to be written with 2 input parameters. By convenction these input parameters should be called "resolve" and "reject". 

The "new Promise(myCallback)" code will then use these input parameters to pass in 2 functions, which are both javascript builtin functions. 


The myCallback function's code block then needs to call one of resolve() or reject() function as a 
way to signal the function has finished executing. The "myPromise.then(success,fail)" then executes. 
The success() function is triggered if myCallback exited with resolve(), and the fail() function is executed if myCallback exited with reject() 


*/

let msg = function(message){
  console.log(message) 
}


let myCallback = function(resolve, reject) {

  // This is a dummy http response. If this takes longer than 3 seconds then
  // "reject" is triggered. 
  let apiResponse = 0

  // input parameters for "resolve" and "reject" functions are optional. i.e. you can just do resolve() and reject()
  setTimeout(
    () => {
      if (apiResponse === 0) {
        resolve(msg("passed"))
      } else {
        reject(msg("rejected"))
      }
    }, 3000
  )
}

let success = function(){
  console.log("Promise kept")
}

let fail = function(){
  console.log("Promise broken")  
}


let myPromise = new Promise(myCallback)
myPromise.then(success,fail)


/*
This outputs:

// passed
// Promise kept

This approach is a bit crude. E.g the 3 second pause happens even if "let apiResponse = 0" only 1 second. 

You can also rewrite ".then(success,fail)" to ".then(success).catch(fail)"

*/

let msg = function(message){
  console.log(message) 
}


let myCallback = function(resolve, reject) {

  let apiResponse = 0

  setTimeout(
    () => {
      if (apiResponse === 0) {
        resolve(msg("passed"))
      } else {
        reject(msg("rejected"))
      }
    }, 3000
  )
}

let success = function(){
  console.log("Promise kept")
}

let fail = function(){
  console.log("Promise broken")  
}


let myPromise = new Promise(myCallback)
myPromise
  .then(success)
  .catch(fail)





/*
You can also use 
*/

function printAndRespond (message) {

  function myCallback(resolve, reject) {
    if (message === 'hello') {
      return reject(new Error('bad words'))
    }
    // This line is mimiking an api response. 
    console.log('Message is : ' + message)
    setTimeout(resolve, 1000)
  }

  return new Promise(myCallback)
}

console.log('starting')
printAndRespond('Hi Sher')
  .then(() => {return printAndRespond('time 2')})
  .then(() => {return printAndRespond('time 3')})
  .then(() => {return printAndRespond('time 4')})
  .catch(err => {
    console.log('oh no, something went wrong: ' + err)
  })
console.log('finished')





/*

See: 
- https://www.sitepoint.com/delay-sleep-pause-wait/
- https://javascript.info/promise-basics
*/

