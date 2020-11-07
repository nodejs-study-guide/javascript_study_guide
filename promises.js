function printAndRespond (message, callback) {
  console.log('Message is : ' + message)
  // The setTimeout is a built in function
  // that accepts a callback function 
  // followed by milliseconds delay before executing that function
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

  setTimeout(callback, 3000) // this is fired and forgotten
}

function myCallback () {
  console.log('callback called')
}
console.log('starting')
printAndRespond('Hi Sher', myCallback)
console.log('finished')

// This out outputs

// starting
// Message is : Hi Sher
// finished
// callback called     (this gets outputted after 3 seconds)
