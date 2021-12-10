'use strict'



let completed = true



let myPromise = new Promise((resolve, reject) => {

  // some async work here. 
  if (completed) {
    resolve("code executed successfully")
  } else {
    reject("Something has gone wrong")
  }

})

// the "then" method is used to define the "resolve"  and "reject" functions, and then executes it. 
myPromise.then(
	function (successResponse) {
		console.log("Executing the resolve function")
		console.log("the message is:", successResponse)
	},
	function (myError) {
		console.log("Executing the reject function")
		console.error(myError)
	}
)