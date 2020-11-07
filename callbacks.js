/*
  A callback is any function that's passed into another
  function as an input parameter. In this example,
  myCallback() is a callback function. 
*/

function myCallback() {
  console.log("Hi there")
}

function print(aCallback) {  
    aCallback()
}

print(myCallback)
