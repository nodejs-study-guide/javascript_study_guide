/*
A promise is a javascript builtin object. It comes with two methods "resolve" and "reject". 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

https://javascript.info/promise-basics
https://www.sitepoint.com/delay-sleep-pause-wait/

When instantiating a "Promise" object, you have to pass in a function, which in turn can accept 2 input parameters. 

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

