'use strict'


const fs = require('fs')
const path = require('path')

const pathToFile = path.join(__dirname, 'helloxxx.txt') 

// By conventions, the first input parameter of a callback functions, is set as the error. 

// There's a few ways to handle an error. first way is to use "throw" to exit out as soon as error is encountered:




fs.readFile(pathToFile, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    throw err
	// return                       // instead of throw, we can just do a "return". 
	// errorHandlingFunction(err)   // or create another function to handle the error.  
  }
  console.log("throw line will prevent reaching this line if there's an error")
  console.log(data)
})

