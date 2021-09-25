// The nodejs builtin setTimeout function let's you add delays in your script. 
// it requires 2 input parameters. 
// parameter 1 - the function to run after delay finishes (in this example it's an arrow function)
// parameter 2 - the length of the delay. 

setTimeout(

  () => {
    console.log("Hello after 4 seconds")
  },

  4*1000

)


// Any additional argurments are passed into the function it calls after the delay. 
setTimeout(

  (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName)
  },

  4*1000,

  "Mr",

  "John",

  "Smith"
)



// setInterval is another builtin nodejs function, which is used to run a function over and over
// forever. 
setInterval(
  () => console.log('hello world every 10 seconds'),
  10 * 1000
)


// The clearTimeout is used to cancel a timeout. 

const timerId = setTimeout(
  () => console.log("you won't get a chance to see this"),
  0
)
clearTimeout(timerId)

