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
